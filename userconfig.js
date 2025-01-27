// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  "localIcons": true,
  temperature: {
    location: "Philippines",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  tabs: [
    {
      name: "l ife",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "chill",
          links: [
            {
              name: "messenger",
              url: "https://www.messenger.com/t/100001467351644",
              icon: "message-2",
              icon_color: palette.blue,
            },
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
            {
              name: "yt music",
              url: "https://youtube.com/playlist?list=PLz6JNgmybKavCsK9e-GEk8px2c6-lYW8E&si=s93UJXyf1BXsSQnj",
              icon: "brand-youtube",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "blackboard",
              url: "https://mapua.blackboard.com/ultra/",
              icon: "clipboard-list",
              icon_color: palette.peach,
            },
            {
              name: "mymapua",
              url: "https://my.mapua.edu.ph/Student/Default.aspx",
              icon: "school",
              icon_color: palette.mauve,
            },
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/1/#inbox",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/1/my-drive",
              icon: "brand-google-drive",
              icon_color: palette.teal,
            },
            {
              name: "github",
              url: "https://github.com/tayds25",
              icon: "brand-github",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.yellow,
            },
            {
              name: "pinterest",
              url: "https://ph.pinterest.com",
              icon: "brand-pinterest",
              icon_color: palette.red,
            },
            {
              name: "cineby",
              url: "https://www.cineby.app/",
              icon: "movie",
              icon_color: palette.sapphire,
            }
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.red);