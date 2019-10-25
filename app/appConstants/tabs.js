import {
  Image as ProductDesignIcon,
  Notes as PublicationsIcon,
  AccountBox as ContactMeIcon,
  Announcement as NewsIcon,
} from '@material-ui/icons';

import routes from './routes';

export default {
  PRODUCT_DESIGN: {
    title: 'Product Design',
    icon: ProductDesignIcon,
    route: routes.productDesign,
  },
  PUBLICATIONS: {
    title: 'Publications',
    icon: PublicationsIcon,
    route: routes.publications,
  },
  CONTACT_ME: {
    title: 'Contact Me',
    icon: ContactMeIcon,
    route: routes.contactMe,
  },
  NEWS: {
    title: 'News',
    icon: NewsIcon,
    route: routes.news,
  },
};
