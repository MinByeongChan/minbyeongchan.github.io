declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
// declare module '*.svg';
declare module '*.svg' {
  const content: any;
  export default content;
}
