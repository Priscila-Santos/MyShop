import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <ProductList />
      
    </Provider>
  );
}  

export default App;
