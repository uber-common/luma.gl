/* global window, document, ace, LumaGL, console */
/* eslint-disable no-var, no-console, max-statements */
/* eslint-disable quote-props, prefer-template */
window.addEventListener('load', function onLoad() {
  var examples = {
    'instancing': 'Instancing',
    'picking': 'Picking',
    'multicontext': 'Multiple Contexts',
    'cubemap': 'Cubemap',
    'particles': 'Particles',
    'deferred-rendering': 'Deferred Rendering',
    'persistence': 'Persistence',
    'custom-picking': 'Custom Picking'
  };

  var loadFiles = LumaGL.loadFiles;

  const pathname = window.location.pathname;
  const matches = pathname.match(/^\/dist\/core\/(.*)\//);
  const N = matches ? matches[1] : '01';

  loadFiles({urls: [
    `/examples/core/${N}/index.js`
  ]})
  .then(files => {
    const lumaSrc = files[0];

    // Add the editor div.
    var editorDiv = document.createElement('div');
    editorDiv.className = 'editor';
    editorDiv.style.display = 'none';
    document.body.appendChild(editorDiv);

    // Configure the editor div.
    var editor = ace.edit(editorDiv);
    editor.getSession().setUseWorker(false);
    editor.$blockScrolling = Infinity;
    editor.setTheme('ace/theme/tomorrow');
    editor.getSession().setMode('ace/mode/javascript');
    editor.renderer.setShowGutter(true);
    editor.setShowPrintMargin(false);
    editor.setHighlightActiveLine(false);
    editor.setDisplayIndentGuides(false);
    editor.setValue(lumaSrc);
    editor.setReadOnly(true);
    editor.setFontSize(14);
    editor.getSession().selection.clearSelection();

    // Add the buttons div.
    var div = document.createElement('div');
    div.className = 'buttons';
    document.body.appendChild(div);

    // Add the editor button.
    var editorSpan = document.createElement('span');
    editorSpan.className = 'button';
    editorSpan.innerHTML =
      '<span class="glyphicon glyphicon-search"></span> Source';
    editorSpan.onclick = function() {
      if (editorDiv.style.display !== 'none') {
        editorDiv.style.display = 'none';
      } else {
        editorDiv.style.display = 'block';
      }
    };
    div.appendChild(editorSpan);

    var exampleKeys = Object.keys(examples);
    var exampleNames = exampleKeys.map(function(k) {
      return examples[k];
    });

    // Add the prev/next buttons.
    var split = window.location.pathname.split('/');
    var baseurl = split.slice(0, split.length - 2).join('/') + '/';
    var ex = split[split.length - 2];
    var current = exampleKeys.indexOf(ex);
    var prev = current - 1;
    var next = current + 1;
    var span;
    if (prev > 0) {
      span = document.createElement('span');
      span.className = 'button';
      span.innerHTML =
        '<a href="' + baseurl + exampleKeys[prev] + '">' +
        '<span class="glyphicon glyphicon-chevron-left"></span>' +
        exampleNames[prev] + '</a>';
      div.appendChild(span);
    } else {
      span = document.createElement('span');
      span.className = 'button';
      span.innerHTML =
        '<a href="' + baseurl + exampleKeys[exampleKeys.length - 1] + '">' +
        '<span class="glyphicon glyphicon-chevron-left"></span>' +
        exampleNames[exampleNames.length - 1] + '</a>';
      div.appendChild(span);
    }
    span = document.createElement('span');
    span.className = 'button';
    span.innerHTML =
      '<span style="color:yellow">' +
      exampleNames[current] + ' Example</span>';
    div.appendChild(span);
    if (next < exampleKeys.length) {
      span = document.createElement('span');
      span.className = 'button';
      span.innerHTML =
        '<a href="' + baseurl + exampleKeys[next] + '">' +
        exampleNames[next] +
        ' <span class="glyphicon glyphicon-chevron-right"></span></a>';
      div.appendChild(span);
    } else {
      span = document.createElement('span');
      span.className = 'button';
      span.innerHTML =
        '<a href="' + baseurl + exampleKeys[0] + '">' + exampleNames[0] +
        '<span class="glyphicon glyphicon-chevron-right"></span></a>';
      div.appendChild(span);
    }
  })
  .catch(error => console.error(`Error loading example source: ${error}`));
});
