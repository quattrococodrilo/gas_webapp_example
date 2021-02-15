import Router from '../ds_modules/webapp/router';
import { home, ckEditorView, vueView } from './views';

const urls = () => {
  
  const paths = Router();
  
  paths.addRoute({
    name: 'home',
    path: '',
    view: home,
  });

  paths.addRoute({
    name: 'ckeditor',
    path: 'ckeditor',
    view: ckEditorView,
  });
  
  paths.addRoute({
    name: 'simplevue',
    path: 'simplevue',
    view: vueView,
  });
}
