'use babel';

var path = require('path');

/**
 * Atom package activation
 */
export function activate() {
  atom.commands.add('atom-workspace', {
    'copy-filename:copy-open-file-filename': () => {
      return this.copyOpenFile();
    }
  });
}

/**
 * Copy the name from the current focused file to clipboard
 */
export function copyOpenFile() {
  let editor = atom.workspace.getActivePaneItem();
  if (!editor) {
    return;
  }

  let file = editor.buffer.file;
  if (!file) {
    return;
  }
  atom.clipboard.write(path.basename(file.path));
}
