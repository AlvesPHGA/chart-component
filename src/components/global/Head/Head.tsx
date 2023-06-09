import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Head = ({
   title,
   description,
}: {
   title: string;
   description: string;
}) => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>{title}</title>
            <meta name="description" content={`${description}`} />
         </Helmet>
      </HelmetProvider>
   );
};
