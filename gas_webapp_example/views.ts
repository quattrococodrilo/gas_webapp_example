import Http from '../ds_modules/webapp/http';

const include = (filename: string) => {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
};

/*
 * Shows index
 * */
export const home = (request) => {
  return Http.render(
    request, 
    'gas_webapp_example/templates/index.html'
  );
}; 

export const ckEditorView = (request) => {
  return Http.render(
    request,
    'gas_webapp_example/templates/ckEditor.html'
  );
};

export const vueView = (request) => {
  return Http.render(
    request, 
    'gas_webapp_example/templates/simpleVue.html'
  );
}
