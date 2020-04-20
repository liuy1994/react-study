import App from 'next/app'
import { Layout } from 'antd';
import '../styles/app.less'

const { Header, Content, Footer } = Layout;
class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Header>HHHHHHEADER</Header>
                <Content>
                    <Component {...pageProps}></Component>
                </Content>
                <Footer>FFFFFFFOOTER</Footer>
            </>
        )
      
    }
}
  
export default MyApp
  