## Introduce

This is an online-meeting application making by using NextJs.
You can do some basic operation like:
1. Create new meeting.
2. Schedule meeting.
3. View recordings after you have record your meeting.
4. Creat personal meeting room with a link and you can send it to everyone

I also deployment this application on vercel so you can visit the website with the link below:
## https://meeting-app-gray-zeta.vercel.app/

You can check out [https://github.com/NTHuyHoang/Meeting-App/) - your feedback and contributions are welcome!

## Set up your project and download library

1. First, create an application with NextJs with command line below:

  // npx create-next-app@latest ./ --typescript --tailwind --eslint

  To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

2. After that, put these command line below in your terminal to download
   libraries that need for your application. In this application, i recently use 3 website below:
    ## https://ui.shadcn.com/
    ## https://clerk.com/docs/quickstarts/nextjs
    ## https://getstream.io/video/docs/react/ui-components/video-theme/
   
  // npx shadcn-ui@latest init
  // npx shadcn-ui@latest add button 
  // npx shadcn-ui@latest add sheet 
  // npm install @clerk/nextjs 
  // npx shadcn-ui@latest add dialog   
  // npm install @stream-io/video-react-sdk 
  // npm install @stream-io/node-sdk 
  // npx shadcn-ui@latest add toast 
  // npx shadcn-ui@latest add dropdown-menu 
  // npx shadcn-ui@latest add textarea 
  // npm install react-datepicker 
  // npx shadcn-ui@latest add input

2. Fix your file .env.local to your client Id. It will help you login using google, facebook and github while we using Clerk
   and to use the stream video and audio from Theme

3. When you have done all this step flow, run npm run dev in your terminal and see the result in:
   ## http://localhost:3000/
   
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
