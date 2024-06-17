import React from 'react';
import "./layout.scss"
import Frame from '../Frame/Frame';

interface LayoutProps {
    children?:  React.ReactNode;
    className?: string;
  }
  

const Layout:React.FC<LayoutProps> =({children, className}) =>{
    return(
        <>
        <div className= {`standard-page-container ${className}`}>
        <Frame />
        <main>
            {children}
        </main>
        <Frame />
           
        </div>
      
        </>
    )
}

export default Layout;
