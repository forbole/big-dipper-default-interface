// import {
//   useState, useEffect, useRef,
// } from 'react';

// /**
//  * Helper hook to handle infinite scrolling
//  */
// export const useInfiniteScrollHook = () => {
//   // const isClient = typeof window === 'object';
//   const scrollElement = useRef();
//   console.log('blah blah');
//   const onScroll = () => {
//     console.log('here');
//     if (scrollElement.current) {
//       const {
//         scrollTop, scrollHeight, clientHeight,
//       } = scrollElement.current;
//       if (scrollTop + clientHeight === scrollHeight) {
//         // TO SOMETHING HERE
//         console.log('Reached bottom');
//       } else {
//         console.log('wtf');
//       }
//     }
//   };

//   return {
//     onScroll,
//     scrollElement,
//   };

//   // const checkIsBottom = () => {
//   //   if (isClient) {
//   //     const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
//   //     const { body } = document;
//   //     const html = document.documentElement;
//   //     const docHeight = Math.max(
//   //       body.scrollHeight,
//   //       body.offsetHeight,
//   //       html.clientHeight,
//   //       html.scrollHeight,
//   //       html.offsetHeight,
//   //     );
//   //     const windowBottom = windowHeight + window.pageYOffset;
//   //     if (windowBottom >= docHeight) {
//   //       console.log('bottom reached');
//   //     }
//   //   }
//   //   return false;
//   // };

//   // const [isBottom, setIsBottom] = useState(checkIsBottom());

//   // useEffect((): any => {
//   //   if (!isClient) {
//   //     return false;
//   //   }

//   //   const handleScroll = () => {
//   //     setIsBottom(checkIsBottom());
//   //   };

//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);

//   // return isBottom;
// };

// // import React, { useRef, useEffect } from 'react';

// // const MyListComponent = () => {
// // const listInnerRef = useRef();

// // const onScroll = () => {
// //   if (listInnerRef.current) {
// //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
// //     if (scrollTop + clientHeight === scrollHeight) {
// //       // TO SOMETHING HERE
// //       console.log('Reached bottom')
// //     }
// //   }
// // };

// //   return (
// //     <div className="list">
// //       <div className="list-inner" onScroll={() => onScroll()} ref={listInnerRef}>
// //         {/* List items */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default List;
