import React, { Suspense } from 'react'

// Component
const HeaderComponent = React.lazy(() => import('./component/aHeaderComponent'));
const FooterComponent = React.lazy(() => import('./component/bFooterComponent'));
import brand from '@/love/dFunction/gBrand';


const GlobalComponent = ({ Redux, LogoutAPICall, children }) => {
  // JSX
  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <HeaderComponent Redux={Redux} LogoutAPICall={LogoutAPICall} />
      </Suspense>
      <div className='min-h-screen bg-[#CCF381] dark:bg-[#4831D4] text-[#4831D4] dark:text-[#CCF381]'>
        { children }
      </div>
      <Suspense fallback={null}>
        <FooterComponent Redux={Redux} />
      </Suspense>
    </React.Fragment>
  )
}

export default GlobalComponent