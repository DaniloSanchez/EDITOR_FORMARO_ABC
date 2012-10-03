class File


  abrir_XML: ->
    nsIFilePicker = Components.interfaces.nsIFilePicker
    fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker)
    fp.init(window, "Abrir XML", nsIFilePicker.modeOpen)
    fp.appendFilters(nsIFilePicker.filterXML)
    res = fp.show()
    if (res == nsIFilePicker.returnOK) 
      thefile = fp.file
      data = @read(thefile.path)
      @makeTree(data)

  abrir_ABC: ->
    nsIFilePicker = Components.interfaces.nsIFilePicker
    fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker)
    fp.init(window, "Abrir ABC", nsIFilePicker.modeOpen)
    fp.appendFilter("ABC Files","*.abc")
    # fp.appendFilters(nsIFilePicker.filterText | nsIFilePicker.filterAll )
    res = fp.show()
    if (res == nsIFilePicker.returnOK)
      thefile = fp.file
      data = @read(thefile.path)
      @_LeerABC(data)

  read: (filename) ->
    nsILocalFile = Components.interfaces.nsILocalFile
    file = Components.classes["@mozilla.org/file/local;1"].createInstance(nsILocalFile)
    file.initWithPath(filename)
    if (file.exists() == false)
      alert("File does not exist")
    nsIFileInputStream = Components.interfaces.nsIFileInputStream
    inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(nsIFileInputStream)
    inputStream.init(file,0x01,00004,null)
    nsIScriptableInputStream = Components.interfaces.nsIScriptableInputStream
    sInputStream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(nsIScriptableInputStream)
    sInputStream.init(inputStream) 
    output = sInputStream.read(sInputStream.available())
    return output

  save: ->
    nsIFilePicker = Components.interfaces.nsIFilePicker
    fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker)
    fp.init(window, "Save File", nsIFilePicker.modeSave)
    fp.appendFilters(nsIFilePicker.filterText | nsIFilePicker.filterAll)
    res = fp.show()
    if (res == nsIFilePicker.returnOK) 
      thefile = fp.file
      @write(thefile.path,@xml2string(@doc))

  write: (filename,data) ->
    nsILocalFile = Components.interfaces.nsILocalFile
    file = Components.classes["@mozilla.org/file/local;1"].createInstance(nsILocalFile)
    nsIFileOutputStream = Components.interfaces.nsIFileOutputStream
    outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(nsIFileOutputStream)
    file.initWithPath(filename)
    outputStream.init(file, 0x04 | 0x08 | 0x20, 0666, 0)
    outputStream.write(data,data.length)
    outputStream.close()

  _LeerABC: (data) ->
    texto = d3.select("textarea")
	          .append("textbox")
              .attr("flex",1)
              .attr("editable",true)
              .attr("multiline",true)
              .attr("value",data)
    # abc_editor = new ABCJS.Editor(data)
    alert("ok")
    text1 = d3.select("box")
            .append("svg")
              .attr("value",abc_editor)



  makeTree: (data) ->
    parser = new DOMParser()
    @doc = parser.parseFromString(data,"application/xml")
    tree = d3.select("vbox")
             .append("tree").attr("flex","1")
             .attr("hidecolumnpicker","true")
             # este artributo es para el segundo proyecto
             .attr("onselect","file.show(this)")
    tree.append("treecols").append("treecol")
        .attr("label","XML PARSEADO").attr("flex",1)
        .attr("primary","true")
    @counter=0
    if (@doc.childNodes!=null)
      @itemsToTreeDOM(@doc.childNodes,tree)

  itemsToTreeDOM: (items,node) ->
    elements = @getElements(items)
    if elements.length > 0
      treechildren = node.append("treechildren")
      for elem in elements
        @elemToTreeDOM(elem,treechildren)

  elemToTreeDOM: (elem,children) ->
    treeitem = children.append("treeitem")
    treeitem.attr("container","true")
            .attr("open","true")
            .attr("id",@counter)
    elem.setAttribute('id',@counter++)
    # alert(@counter)
    treerow = treeitem.append("treerow")
    treerow.append("treecell")
           .attr("label",elem.nodeName)
    @itemsToTreeDOM(elem.childNodes,treeitem)

  getElements: (items) ->
    elements = new Array()
    if items.length > 0
      for i in [0..items.length-1]
        child = items.item(i)
        if child.nodeType==1
          elements.push(child)
    return elements

  xml2string: (node)->
    serializer = new XMLSerializer()
    serializer.serializeToString(node)

  show: (tree) ->
    item = tree.view.getItemAtIndex(tree.currentIndex)
    @current = item.id
    alert(@current)
    # + " " + document.getElementById(@current).value)

  _copyright: ->
    alert(" \t  Instituto Tecnologico de Costa Rica \n \tEscuela de Ingenieria en Computacion \n \t    Interfaces Graficas de Usuario \n \t       Segundo Semestre 2012")

  _info: ->
    alert("Autores: \n\tDanilo Sanches Monge\n\tAndres Ramirez Fuentes")

@file = new File