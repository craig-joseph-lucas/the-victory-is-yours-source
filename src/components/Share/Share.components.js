import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    TumblrShareButton,
    TumblrIcon,
    TwitterShareButton,
    TwitterIcon,
  } from "react-share";

export default [
    {
        name: 'facebook',
        button: FacebookShareButton,
        icon: FacebookIcon
    },
    {
        name: 'twiiter',
        button: TwitterShareButton,
        icon: TwitterIcon
    },
    {
        name: 'email',
        button: EmailShareButton,
        icon: EmailIcon
    },
    {
        name: 'pinterest',
        button: PinterestShareButton,
        icon: PinterestIcon
    }

];