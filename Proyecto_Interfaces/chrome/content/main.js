(function() {
  var File;
  File = (function() {
    function File() {}
    File.prototype.abrir_XML = function() {
      var data, fp, nsIFilePicker, res, thefile;
      nsIFilePicker = Components.interfaces.nsIFilePicker;
      fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
      fp.init(window, "Abrir XML", nsIFilePicker.modeOpen);
      fp.appendFilters(nsIFilePicker.filterXML);
      res = fp.show();
      if (res === nsIFilePicker.returnOK) {
        thefile = fp.file;
        data = this.read(thefile.path);
        return this.makeTree(data);
      }
    };
    File.prototype.abrir_ABC = function() {
      var data, fp, nsIFilePicker, res, thefile;
      nsIFilePicker = Components.interfaces.nsIFilePicker;
      fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
      fp.init(window, "Abrir ABC", nsIFilePicker.modeOpen);
      fp.appendFilter("ABC Files", "*.abc");
      res = fp.show();
      if (res === nsIFilePicker.returnOK) {
        thefile = fp.file;
        data = this.read(thefile.path);
        return this._LeerABC(data);
      }
    };
    File.prototype.read = function(filename) {
      var file, inputStream, nsIFileInputStream, nsILocalFile, nsIScriptableInputStream, output, sInputStream;
      nsILocalFile = Components.interfaces.nsILocalFile;
      file = Components.classes["@mozilla.org/file/local;1"].createInstance(nsILocalFile);
      file.initWithPath(filename);
      if (file.exists() === false) {
        alert("File does not exist");
      }
      nsIFileInputStream = Components.interfaces.nsIFileInputStream;
      inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(nsIFileInputStream);
      inputStream.init(file, 0x01, 00004, null);
      nsIScriptableInputStream = Components.interfaces.nsIScriptableInputStream;
      sInputStream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(nsIScriptableInputStream);
      sInputStream.init(inputStream);
      output = sInputStream.read(sInputStream.available());
      return output;
    };
    File.prototype.save = function() {
      var fp, nsIFilePicker, res, thefile;
      nsIFilePicker = Components.interfaces.nsIFilePicker;
      fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
      fp.init(window, "Save File", nsIFilePicker.modeSave);
      fp.appendFilters(nsIFilePicker.filterText | nsIFilePicker.filterAll);
      res = fp.show();
      if (res === nsIFilePicker.returnOK) {
        thefile = fp.file;
        return this.write(thefile.path, this.xml2string(this.doc));
      }
    };
    File.prototype.write = function(filename, data) {
      var file, nsIFileOutputStream, nsILocalFile, outputStream;
      nsILocalFile = Components.interfaces.nsILocalFile;
      file = Components.classes["@mozilla.org/file/local;1"].createInstance(nsILocalFile);
      nsIFileOutputStream = Components.interfaces.nsIFileOutputStream;
      outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(nsIFileOutputStream);
      file.initWithPath(filename);
      outputStream.init(file, 0x04 | 0x08 | 0x20, 0666, 0);
      outputStream.write(data, data.length);
      return outputStream.close();
    };
    File.prototype._LeerABC = function(data) {
      var text1, texto;
      texto = d3.select("textarea").append("textbox").attr("flex", 1).attr("editable", true).attr("multiline", true).attr("value", data);
      alert("ok");
      return text1 = d3.select("box").append("svg").attr("value", abc_editor);
    };
    File.prototype.makeTree = function(data) {
      var parser, tree;
      parser = new DOMParser();
      this.doc = parser.parseFromString(data, "application/xml");
      tree = d3.select("vbox").append("tree").attr("flex", "1").attr("hidecolumnpicker", "true").attr("onselect", "file.show(this)");
      tree.append("treecols").append("treecol").attr("label", "XML PARSEADO").attr("flex", 1).attr("primary", "true");
      this.counter = 0;
      if (this.doc.childNodes !== null) {
        return this.itemsToTreeDOM(this.doc.childNodes, tree);
      }
    };
    File.prototype.itemsToTreeDOM = function(items, node) {
      var elem, elements, treechildren, _i, _len, _results;
      elements = this.getElements(items);
      if (elements.length > 0) {
        treechildren = node.append("treechildren");
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          elem = elements[_i];
          _results.push(this.elemToTreeDOM(elem, treechildren));
        }
        return _results;
      }
    };
    File.prototype.elemToTreeDOM = function(elem, children) {
      var treeitem, treerow;
      treeitem = children.append("treeitem");
      treeitem.attr("container", "true").attr("open", "true").attr("id", this.counter);
      elem.setAttribute('id', this.counter++);
      treerow = treeitem.append("treerow");
      treerow.append("treecell").attr("label", elem.nodeName);
      return this.itemsToTreeDOM(elem.childNodes, treeitem);
    };
    File.prototype.getElements = function(items) {
      var child, elements, i, _ref;
      elements = new Array();
      if (items.length > 0) {
        for (i = 0, _ref = items.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
          child = items.item(i);
          if (child.nodeType === 1) {
            elements.push(child);
          }
        }
      }
      return elements;
    };
    File.prototype.xml2string = function(node) {
      var serializer;
      serializer = new XMLSerializer();
      return serializer.serializeToString(node);
    };
    File.prototype.show = function(tree) {
      var item;
      item = tree.view.getItemAtIndex(tree.currentIndex);
      this.current = item.id;
      return alert(this.current);
    };
    File.prototype._copyright = function() {
      return alert(" \t  Instituto Tecnologico de Costa Rica \n \tEscuela de Ingenieria en Computacion \n \t    Interfaces Graficas de Usuario \n \t       Segundo Semestre 2012");
    };
    File.prototype._info = function() {
      return alert("Autores: \n\tDanilo Sanches Monge\n\tAndres Ramirez Fuentes");
    };
    return File;
  })();
  this.file = new File;
}).call(this);
