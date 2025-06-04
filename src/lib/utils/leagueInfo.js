/*   STEP 1   */
export const leagueID = "1180105270592172032"; // your league ID
export const leagueName = "Masters of Malt"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Masters of Malt League Page.</p>
  <p>My WORD we have a league Page!</p>
  <p>Lets get started!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      export const managers = [
  {
    //"roster": 1,
    "managerID": "459670303153319936",
    "name": "Steven_Anderson",
    "location": "", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/Steven_Anderson.jpg", // Ensure you have images for each manager
    "fantasyStart": null, // (optional)
    "favoriteTeam": "", // (optional)
    "mode": "Win Now", // (optional)
    "rival": {
      name: "", // Can be anything
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null, // (optional)
    "valuePosition": "", // (optional)
    "rookieOrVets": "Rookies", // (optional)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', 'Carrier Pigeon'
  },
  {
    //"roster": 2,
    "managerID": "459680531118813184",
    "name": "MikeThorburn",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/MikeThorburn.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 3,
    "managerID": "459798545432571904",
    "name": "BryanRobertson",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/BryanRobertson.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 4,
    "managerID": "459807985279954944",
    "name": "Gary_Stewart",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/Gary_Stewart.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 5,
    "managerID": "459808539628531712",
    "name": "Alan_Munro",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/Alan_Munro.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 6,
    "managerID": "460142987100286976",
    "name": "AndrewDownie",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/AndrewDownie.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 7,
    "managerID": "460169498125660160",
    "name": "AndyThorburn",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/AndyThorburn.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 8,
    "managerID": "460170420323086336",
    "name": "RobynDownie",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/RobynDownie.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 9,
    "managerID": "461317163672662016",
    "name": "keithgraham117",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/keithgraham117.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 10,
    "managerID": "461600933038518272",
    "name": "Telfy",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/Telfy.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 11,
    "managerID": "461918180684591104",
    "name": "ArgoLuke",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/ArgoLuke.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 12,
    "managerID": "461989970140196864",
    "name": "RobBreen",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/RobBreen.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 13,
    "managerID": "462356150449336320",
    "name": "GregStark",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/GregStark.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 14,
    "managerID": "462479324063199232",
    "name": "JagoLoons",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/JagoLoons.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 15,
    "managerID": "462637149540315136",
    "name": "HexRay",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/HexRay.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  },
  {
    //"roster": 16,
    "managerID": "468423064867041280",
    "name": "GraemeDonald",
    "location": "",
    "bio": "Lorem ipsum...",
    "photo": "/managers/GraemeDonald.jpg",
    "fantasyStart": null,
    "favoriteTeam": "",
    "mode": "Win Now",
    "rival": {
      name: "",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 5,
    "preferredContact": "Sleeper",
  }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
