/**
 * Settings
 * */

ScriptProperties.setProperties({
  bookUrl: '',
  sheetName: '',
  debug: '0',
  argumentRoute: 'path',
  appName: '',
  urlDev: 'https://script.google.com/macros/s/AKfycbzjTIpvWoc4MkqVWvGwaKlW_vhYIl2W-ndhXF50jl0S/dev',
  urlProd: 'https://script.google.com/macros/s/AKfycbz8knhB6681sF8JiHPGpfCPvCgE0v9jNfo7PQz7yBDkSL0a415TcmpT0Q/exec',
  favicon: 'https://udes.edu.mx/wp-content/uploads/2016/08/favicon.png',
  notAuthPath: '',
  defaultPath: '',
  firebaseUrl: '',
  firebaseSecret: '',
});

const SETTINGS = PropertiesService.getScriptProperties();

export default SETTINGS;
