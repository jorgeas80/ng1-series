/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name seriesng1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seriesng1App
 */
angular.module('seriesng1App')
  .controller('MainCtrl', function ($rootScope, $scope) {

    var vm = this;

    // Series aired today. Static at first.
    vm.series_today = [{
      "id": 949093,
      "url": "http://www.tvmaze.com/episodes/949093/amhq-americas-morning-headquarters-4x303-episode-303",
      "name": "Episode 303",
      "season": 4,
      "number": 303,
      "airdate": "2016-10-29",
      "airtime": "06:00",
      "airstamp": "2016-10-29T06:00:00-04:00",
      "runtime": 180,
      "image": null,
      "summary": "",
      "show": {
        "id": 14250,
        "url": "http://www.tvmaze.com/shows/14250/amhq-americas-morning-headquarters",
        "name": "AMHQ: America's Morning Headquarters",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 180,
        "premiered": "2012-11-02",
        "schedule": {
          "time": "06:00",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 228,
          "name": "The Weather Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/48/121123.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/48/121123.jpg"
        },
        "summary": "<p><strong>AMHQ: America's Morning Headquarters</strong> (formerly Your Weather Today and Morning Rush) is an American morning television program on The Weather Channel. Airing every morning from 5 to 9 a.m. Eastern Time, the program focuses on morning weather conditions, news and business information from around the country. The program debuted on January 3, 2000, under its original title.</p>",
        "updated": 1477196632,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/14250"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/949093"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/949094"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/949093"
        }
      }
    }, {
      "id": 960746,
      "url": "http://www.tvmaze.com/episodes/960746/new-day-saturday-2016-10-29-episode-44",
      "name": "Episode 44",
      "season": 2016,
      "number": 44,
      "airdate": "2016-10-29",
      "airtime": "06:00",
      "airstamp": "2016-10-29T06:00:00-04:00",
      "runtime": 180,
      "image": null,
      "summary": "",
      "show": {
        "id": 9962,
        "url": "http://www.tvmaze.com/shows/9962/new-day-saturday",
        "name": "New Day Saturday",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 180,
        "premiered": "2013-06-22",
        "schedule": {
          "time": "06:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 40,
          "name": "CNN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/34/85513.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/34/85513.jpg"
        },
        "summary": "<p>On <strong><em>\"New Day Saturday</em></strong><strong><em>\"</em></strong> hosts Victor Blackwell &amp; Christi Paul presents the latest news, weather and high interest stories to stat your day.</p>",
        "updated": 1476487375,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9962"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960746"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/960747"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960746"
        }
      }
    }, {
      "id": 960777,
      "url": "http://www.tvmaze.com/episodes/960777/fox-friends-saturday-2016-10-29-episode-43",
      "name": "Episode 43",
      "season": 2016,
      "number": 43,
      "airdate": "2016-10-29",
      "airtime": "06:00",
      "airstamp": "2016-10-29T06:00:00-04:00",
      "runtime": 240,
      "image": null,
      "summary": "",
      "show": {
        "id": 9955,
        "url": "http://www.tvmaze.com/shows/9955/fox-friends-saturday",
        "name": "FOX & Friends Saturday",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 240,
        "premiered": "2001-02-10",
        "schedule": {
          "time": "06:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 185,
          "name": "FOX News Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/34/85439.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/34/85439.jpg"
        },
        "summary": "<p>Saturday early risers get a chance to experience their own news, information and entertainment that <strong>\"FOX &amp; Friends\"</strong> viewers get during the week with this weekend version of the show <strong><em>\"FOX &amp; Friends Saturday\"</em></strong> early risers get a chance to experience their own news, information and entertainment that <em>\"FOX &amp; Friends\"</em> viewers get during the week with this weekend version of the show, currently hosted by Clayton Morris, Anna Kooiman and Tucker Carlson. In addition to reporting and discussion of the latest news, the show features weather forecasts to help viewers plan their weekend activities., currently hosted by Clayton Morris, Anna Kooiman and Tucker Carlson. In addition to reporting and discussion of the latest news, the show features weather forecasts to help viewers plan their weekend activities.</p>",
        "updated": 1476489812,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9955"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960777"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/960778"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960777"
        }
      }
    }, {
      "id": 960979,
      "url": "http://www.tvmaze.com/episodes/960979/premier-league-preview-show-19x42-episode-42",
      "name": "Episode 42",
      "season": 19,
      "number": 42,
      "airdate": "2016-10-29",
      "airtime": "06:00",
      "airstamp": "2016-10-29T06:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 9505,
        "url": "http://www.tvmaze.com/shows/9505/premier-league-preview-show",
        "name": "Premier League Preview Show",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "1998-09-12",
        "schedule": {
          "time": "06:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 104,
          "name": "NBCSN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/83157.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/83157.jpg"
        },
        "summary": "<p><strong><em>\"Premier League Preview Show\"</em></strong> is a weekly talk show where experts analyze and discuss the upcoming weekend's soccer matchups.</p>",
        "updated": 1476496058,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9505"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960979"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/960980"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960979"
        }
      }
    }, {
      "id": 961275,
      "url": "http://www.tvmaze.com/episodes/961275/sonic-boom-2x01-tommy-thunder-method-actor",
      "name": "Tommy Thunder: Method Actor",
      "season": 2,
      "number": 1,
      "airdate": "2016-10-29",
      "airtime": "06:00",
      "airstamp": "2016-10-29T06:00:00-04:00",
      "runtime": 15,
      "image": null,
      "summary": "",
      "show": {
        "id": 489,
        "url": "http://www.tvmaze.com/shows/489/sonic-boom",
        "name": "Sonic Boom",
        "type": "Animation",
        "language": "English",
        "genres": ["Comedy", "Action", "Adventure", "Children"],
        "status": "Running",
        "runtime": 15,
        "premiered": "2014-11-08",
        "schedule": {
          "time": "06:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 11,
          "name": "Cartoon Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 46124,
          "thetvdb": 280103,
          "imdb": "tt3232262"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/3/9460.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/3/9460.jpg"
        },
        "summary": "<p><strong>Sonic Boom</strong> is a CGI animated show based on the massive popular game Sonic the Hedgehog.</p>",
        "updated": 1477455760,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/489"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961275"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961275"
        }
      }
    }, {
      "id": 961562,
      "url": "http://www.tvmaze.com/episodes/961562/jimmy-houston-adventures-10x04-incoming-turkey",
      "name": "Incoming Turkey",
      "season": 10,
      "number": 4,
      "airdate": "2016-10-29",
      "airtime": "06:30",
      "airstamp": "2016-10-29T06:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Larry Rencken calls a Tom off the roost in Texas; Jimmy bass fishes in east Texas with Ron Parker.\n </p>",
      "show": {
        "id": 22032,
        "url": "http://www.tvmaze.com/shows/22032/jimmy-houston-adventures",
        "name": "Jimmy Houston Adventures",
        "type": "Reality",
        "language": "English",
        "genres": ["Adventure", "Travel"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2004-01-01",
        "schedule": {
          "time": "06:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 229,
          "name": "AHC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/80/200452.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/80/200452.jpg"
        },
        "summary": "<p>Jimmy travels all over the world hunting and fishing, big game hunting, bird hunting, along with Bass and Crappie fishing.</p>",
        "updated": 1476924437,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22032"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961562"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/961563"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961562"
        }
      }
    }, {
      "id": 967636,
      "url": "http://www.tvmaze.com/episodes/967636/transformers-robots-in-disguise-3x02-strongarms-big-score",
      "name": "Strongarm's Big Score",
      "season": 3,
      "number": 2,
      "airdate": "2016-10-29",
      "airtime": "06:30",
      "airstamp": "2016-10-29T06:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Strongarm does poorly on a test and wants to improve her score on the \nnext mission, where she must combat another scavenging Decepticon.\n </p>",
      "show": {
        "id": 2271,
        "url": "http://www.tvmaze.com/shows/2271/transformers-robots-in-disguise",
        "name": "Transformers: Robots in Disguise",
        "type": "Animation",
        "language": "English",
        "genres": ["Adventure", "Fantasy", "Science-Fiction"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2015-03-14",
        "schedule": {
          "time": "06:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 11,
          "name": "Cartoon Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 44240,
          "thetvdb": 292171,
          "imdb": "tt3604232"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/12/31300.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/12/31300.jpg"
        },
        "summary": "<p>In <strong>Transformers: Robots in Disguise</strong>, Bumblebee is summoned to save Earth from a new faction of Decepticons and assembles a rogue team of young Autobots that includes a rebel bad boy bot, an elite guard cadet, a bombastic Dinobot and hyperactive Mini-Con to capture their new enemies. Each new bot is a fully capable action hero but inexperienced in working together in a team, forcing Bumblebee to become both squad leader and coach.</p>",
        "updated": 1477430412,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/2271"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/967636"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/967637"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/967636"
        }
      }
    }, {
      "id": 946445,
      "url": "http://www.tvmaze.com/episodes/946445/pokemon-the-series-xy-19x37-finals-not-for-the-faint-hearted",
      "name": "Finals Not for the Faint-Hearted!",
      "season": 19,
      "number": 37,
      "airdate": "2016-10-29",
      "airtime": "07:00",
      "airstamp": "2016-10-29T07:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>During the Kalos League finals, Ash battles Alain in a much-anticipated battle.\n </p>",
      "show": {
        "id": 590,
        "url": "http://www.tvmaze.com/shows/590/pokemon-the-series-xy",
        "name": "Pokémon the Series: XY",
        "type": "Animation",
        "language": "English",
        "genres": ["Comedy", "Action", "Adventure", "Anime", "Children", "Fantasy"],
        "status": "Running",
        "runtime": 30,
        "premiered": "1998-09-08",
        "schedule": {
          "time": "07:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 9
        },
        "weight": 1,
        "network": {
          "id": 11,
          "name": "Cartoon Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 31,
          "thetvdb": 76703,
          "imdb": "tt0176385"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/67/167968.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/67/167968.jpg"
        },
        "summary": "<p><strong>Pokémon the Series: XY</strong> is about a Ten-year-old boy named Ash leaves his home to explore the world and become the greatest Pokémon trainer. In his travels he is joined by two friends, Misty and Brock, and his own Pokémon, Pikachu. Together, they search their world to find all 150 Pokémon while avoiding Team Rocket who are out to steal their Pokémon.</p>",
        "updated": 1477430358,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/590"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/946445"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/946446"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/946445"
        }
      }
    }, {
      "id": 949182,
      "url": "http://www.tvmaze.com/episodes/949182/today-2016-10-29-episode-303",
      "name": "Episode 303",
      "season": 2016,
      "number": 303,
      "airdate": "2016-10-29",
      "airtime": "07:00",
      "airstamp": "2016-10-29T07:00:00-04:00",
      "runtime": 120,
      "image": null,
      "summary": "",
      "show": {
        "id": 9564,
        "url": "http://www.tvmaze.com/shows/9564/today",
        "name": "Today",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 120,
        "premiered": "1952-01-14",
        "schedule": {
          "time": "07:00",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 1,
          "name": "NBC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 70708,
          "imdb": "tt0044298"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/83605.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/83605.jpg"
        },
        "summary": "<p><strong><em>\"</em></strong><i><strong>Today\"</strong></i> also called <i><strong>The Today Show</strong></i>, is an American news and talk morning television show that airs on NBC. The program debuted on January 14, 1952. It was the first of its genre on American television and in the world, and is the fifth-longest-running American television series. Originally a two-hour program on weekdays, it expanded to Sundays (a one-hour program) in 1987 and Saturdays (running for two hours) in 1992. The weekday broadcast expanded to three hours in 2000, and to four hours in 2007. <i>Today</i>‍ 's dominance was virtually unchallenged by the other networks until the late 1980s, when it was overtaken by ABC's <i>Good Morning America</i>. <i>Today</i> retook theNielsen ratings lead the week of December 11, 1995, and held onto that position for 852 consecutive weeks until the week of April 9, 2012, when it was beaten by <i>Good Morning America</i> again. <i>Today</i> has maintained its No. 2 status since the summer of 2012 each year behind <i>GMA</i>. In 2002, <i>Today</i> was ranked No. 17 on TV Guide's 50 Greatest TV Shows of All Time</p>",
        "updated": 1476839417,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9564"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/949182"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/949183"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/949182"
        }
      }
    }, {
      "id": 960626,
      "url": "http://www.tvmaze.com/episodes/960626/bloomberg-businessweek-1x134-episode-134",
      "name": "Episode 134",
      "season": 1,
      "number": 134,
      "airdate": "2016-10-29",
      "airtime": "07:00",
      "airstamp": "2016-10-29T07:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 11350,
        "url": "http://www.tvmaze.com/shows/11350/bloomberg-businessweek",
        "name": "Bloomberg BusinessWeek",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-01-08",
        "schedule": {
          "time": "07:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 172,
          "name": "Bloomberg TV",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/40/101660.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/40/101660.jpg"
        },
        "summary": "<p><strong>Bloomberg BusinessWeek</strong> is co-hosted by Carol Massar and David Gura who go behind the scenes of Bloomberg BusinessWeek magazine.</p>",
        "updated": 1477440308,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/11350"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960628"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/960629"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960626"
        }
      }
    }, {
      "id": 960868,
      "url": "http://www.tvmaze.com/episodes/960868/hln-weekend-express-4x87-episode-87",
      "name": "Episode 87",
      "season": 4,
      "number": 87,
      "airdate": "2016-10-29",
      "airtime": "07:00",
      "airstamp": "2016-10-29T07:00:00-04:00",
      "runtime": 300,
      "image": null,
      "summary": "",
      "show": {
        "id": 16583,
        "url": "http://www.tvmaze.com/shows/16583/hln-weekend-express",
        "name": "HLN Weekend Express",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 300,
        "premiered": "2013-07-13",
        "schedule": {
          "time": "07:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 193,
          "name": "Headline News",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": "tt0826215"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/80/200155.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/80/200155.jpg"
        },
        "summary": "<p><strong><em>\"HLN Weekend Express\"</em></strong> originally titled \"Morning Express with Robin Meade\" is Headline News Network's weekend News show hosted by Lynn Smith that airs from 7 AM to 12 Noon, ET every Saturday and Sunday!</p>",
        "updated": 1476491661,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/16583"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960868"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/960869"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960868"
        }
      }
    }, {
      "id": 960596,
      "url": "http://www.tvmaze.com/episodes/960596/calling-dr-pol-3x05-calling-dr-emily",
      "name": "Calling Dr. Emily",
      "season": 3,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "07:30",
      "airstamp": "2016-10-29T07:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 5422,
        "url": "http://www.tvmaze.com/shows/5422/calling-dr-pol",
        "name": "Calling Dr. Pol",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2014-10-04",
        "schedule": {
          "time": "07:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 5,
          "name": "The CW",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 45370,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/26/67272.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/26/67272.jpg"
        },
        "summary": "<p>Throughout a career in which he has helped some 19,000 patients, veterinarian Dr. Jan Pol has gained a wealth of experience. While large farm animals are the crux of his speciality, the doctor and the staff at his Beal City, Mich., office work with beasts of all shapes and sizes, and he gives owners sensible advice about caring for their animals. His unstoppable and unflappable work ethic has made him a legendary figure in his community and profession!</p>",
        "updated": 1476468708,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/5422"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960596"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960596"
        }
      }
    }, {
      "id": 939820,
      "url": "http://www.tvmaze.com/episodes/939820/regal-academy-1x11-the-bad-wolfs-great-fall",
      "name": "The Bad Wolf's Great Fall",
      "season": 1,
      "number": 11,
      "airdate": "2016-10-29",
      "airtime": "08:00",
      "airstamp": "2016-10-29T08:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Humpty Dumpty is at Regal Academy for the annual treasure hunt; during their search, Rose's team is chased by the Bad Wolf.\n </p>",
      "show": {
        "id": 19978,
        "url": "http://www.tvmaze.com/shows/19978/regal-academy",
        "name": "Regal Academy",
        "type": "Animation",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-08-13",
        "schedule": {
          "time": "08:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 10
        },
        "weight": 0,
        "network": {
          "id": 27,
          "name": "Nickelodeon",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/70/176423.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/70/176423.jpg"
        },
        "summary": "<p>Despite her last name, Rose Cinderella is an average teenager who is as \nobsessed with shoes as she is with fairy tales. Things change when she \ndiscovers a magic key that unlocks a new world in which fairy tales come\n to life. After tumbling into Fairy Tale Land, Rose finds out that she \nhas a magical family legacy -- Cinderella is her grandmother. Cinderella\n is the headmistress of <strong>Regal Academy</strong>, where five fairy-tale families \nteach the next generation of princes and princesses how to become \nheroes. Now, Rose is learning to use her magic and live up to her famous\n surname, along with new friends that include Astoria Rapunzel and Hawk \nSnowwhite.</p>",
        "updated": 1477723954,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/19978"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/939820"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/939820"
        }
      }
    }, {
      "id": 954958,
      "url": "http://www.tvmaze.com/episodes/954958/rescue-me-with-dr-lisa-1x05-meet-the-beaumonts",
      "name": "Meet the Beaumonts",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "08:00",
      "airstamp": "2016-10-29T08:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Dr. Lisa tries to help a family with unique requests adopt their first dog.</p>",
      "show": {
        "id": 21174,
        "url": "http://www.tvmaze.com/shows/21174/rescue-me-with-dr-lisa",
        "name": "Rescue Me with Dr. Lisa",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "08:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 5,
          "name": "The CW",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/80/200086.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/80/200086.jpg"
        },
        "summary": "<p><strong>Rescue Me with Dr. Lisa</strong> tells the story about a veterinarian's mission to save orphan animals, one pet at a time. Hosted by Dr. Lisa Chimes, a passionate emergency veterinarian with a heart of gold, each episode will feature Dr. Lisa matching orphaned and abandoned animals with loving new homes. Each week, Rescue Me with Dr. Lisa will provide viewers the experience to witness these heartwarming stories about pets and their chance for a new life.</p>",
        "updated": 1477746845,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/21174"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/954958"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/975741"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/954958"
        }
      }
    }, {
      "id": 962011,
      "url": "http://www.tvmaze.com/episodes/962011/moveable-feast-with-fine-cooking-4x09-topping-virginia-ryan-travis-vroxton-chef-dylan-fultineer",
      "name": "Topping, Virginia -- Ryan & Travis Vroxton & Chef Dylan Fultineer",
      "season": 4,
      "number": 9,
      "airdate": "2016-10-29",
      "airtime": "08:00",
      "airstamp": "2016-10-29T08:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 22064,
        "url": "http://www.tvmaze.com/shows/22064/moveable-feast-with-fine-cooking",
        "name": "Moveable Feast with Fine Cooking",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2013-10-19",
        "schedule": {
          "time": "08:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 274931,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/80/200889.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/80/200889.jpg"
        },
        "summary": "<p><strong>Moveable Feast with Fine Cooking</strong> takes viewers on a culinary journey across America. Our talented host, Pete Evans, teams up with the country's most innovative chefs and food artisans, who are known for their use of fresh regional ingredients, to create spontaneous delicious feasts in unique settings for friends and family that will inspire home cooks everywhere.</p>",
        "updated": 1477720458,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22064"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/962011"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/962012"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/962011"
        }
      }
    }, {
      "id": 960759,
      "url": "http://www.tvmaze.com/episodes/960759/nfl-matchup-23x12-episode-12",
      "name": "Episode 12",
      "season": 23,
      "number": 12,
      "airdate": "2016-10-29",
      "airtime": "08:30",
      "airstamp": "2016-10-29T08:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>A preview of key weekend matchups. </p>",
      "show": {
        "id": 9503,
        "url": "http://www.tvmaze.com/shows/9503/nfl-matchup",
        "name": "NFL Matchup",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "1994-09-03",
        "schedule": {
          "time": "08:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 180,
          "name": "ESPN2",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/83144.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/83144.jpg"
        },
        "summary": "<p><strong>NFL Matchup</strong> is a National Football League preview show that airs every week during the regular season and playoffs. As of 2006, the official name is <i>State Farm NFL Matchup</i>, and it is produced by NFL Films. As of the 2008 - 2009 NFL season, it airs every Sunday during the season on ESPN2 at 08:30am ET!</p>",
        "updated": 1477535040,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9503"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960759"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/974645"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960759"
        }
      }
    }, {
      "id": 960881,
      "url": "http://www.tvmaze.com/episodes/960881/military-collectors-1x09-military-vehicle-restorations-by-m-series-rebuild",
      "name": "Military Vehicle Restorations by M-Series Rebuild",
      "season": 1,
      "number": 9,
      "airdate": "2016-10-29",
      "airtime": "08:30",
      "airstamp": "2016-10-29T08:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Charles Talbert, owner of the custom \nrestoration and rebuilding facility M-Series Rebuild, shows Bob some of \nhis team's projects from start to finish. </p>",
      "show": {
        "id": 20508,
        "url": "http://www.tvmaze.com/shows/20508/military-collectors",
        "name": "Military Collectors",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-09-03",
        "schedule": {
          "time": "08:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 229,
          "name": "AHC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/72/181208.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/72/181208.jpg"
        },
        "summary": "",
        "updated": 1476492581,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/20508"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960881"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960881"
        }
      }
    }, {
      "id": 971400,
      "url": "http://www.tvmaze.com/episodes/971400/miles-from-tomorrowland-2x23-space-junkers",
      "name": "Space Junkers",
      "season": 2,
      "number": 23,
      "airdate": "2016-10-29",
      "airtime": "08:30",
      "airstamp": "2016-10-29T08:30:00-04:00",
      "runtime": 12,
      "image": null,
      "summary": "",
      "show": {
        "id": 3917,
        "url": "http://www.tvmaze.com/shows/3917/miles-from-tomorrowland",
        "name": "Miles from Tomorrowland",
        "type": "Animation",
        "language": "English",
        "genres": ["Comedy", "Action", "Adventure", "Children", "Science-Fiction"],
        "status": "Running",
        "runtime": 12,
        "premiered": "2015-02-06",
        "schedule": {
          "time": "08:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 1039,
          "name": "Disney Junior",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": {
          "id": 124,
          "name": "WATCH Disney Junior",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "externals": {
          "tvrage": 47250,
          "thetvdb": 290506,
          "imdb": "tt3098856"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/19/48805.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/19/48805.jpg"
        },
        "summary": "<p>Space adventurer Miles Callisto is always ready for action, traveling through the universe with his family and his best friend, a robo-ostrich named Merc. The family includes mom Phoebe, the ship's captain who sets a good example and encourages her family on every mission; dad Leo, a laid-back pilot and inventor who isn't afraid to try new things; and big sister Loretta, who is a brilliant computer coder and always has her brother's back. Together, they use teamwork and problem solving as they encounter obstacles while completing missions throughout outer space for the Tomorrowland Transit Authority. The Callistos' home base is a floating space station called the Stellosphere, and the StarJetter is the vehicle they use to go to other planets and galaxies. Each episode features a fact related to space or science that inspires the storyline for <strong>Miles from Tomorrowland</strong>/</p>",
        "updated": 1477300859,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/3917"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/971401"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/971400"
        }
      }
    }, {
      "id": 971401,
      "url": "http://www.tvmaze.com/episodes/971401/miles-from-tomorrowland-2x24-help-us-jet-retrograde",
      "name": "Help Us, Jet Retrograde",
      "season": 2,
      "number": 24,
      "airdate": "2016-10-29",
      "airtime": "08:30",
      "airstamp": "2016-10-29T08:30:00-04:00",
      "runtime": 12,
      "image": null,
      "summary": "",
      "show": {
        "id": 3917,
        "url": "http://www.tvmaze.com/shows/3917/miles-from-tomorrowland",
        "name": "Miles from Tomorrowland",
        "type": "Animation",
        "language": "English",
        "genres": ["Comedy", "Action", "Adventure", "Children", "Science-Fiction"],
        "status": "Running",
        "runtime": 12,
        "premiered": "2015-02-06",
        "schedule": {
          "time": "08:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 1039,
          "name": "Disney Junior",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": {
          "id": 124,
          "name": "WATCH Disney Junior",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "externals": {
          "tvrage": 47250,
          "thetvdb": 290506,
          "imdb": "tt3098856"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/19/48805.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/19/48805.jpg"
        },
        "summary": "<p>Space adventurer Miles Callisto is always ready for action, traveling through the universe with his family and his best friend, a robo-ostrich named Merc. The family includes mom Phoebe, the ship's captain who sets a good example and encourages her family on every mission; dad Leo, a laid-back pilot and inventor who isn't afraid to try new things; and big sister Loretta, who is a brilliant computer coder and always has her brother's back. Together, they use teamwork and problem solving as they encounter obstacles while completing missions throughout outer space for the Tomorrowland Transit Authority. The Callistos' home base is a floating space station called the Stellosphere, and the StarJetter is the vehicle they use to go to other planets and galaxies. Each episode features a fact related to space or science that inspires the storyline for <strong>Miles from Tomorrowland</strong>/</p>",
        "updated": 1477300859,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/3917"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/971401"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/971401"
        }
      }
    }, {
      "id": 939575,
      "url": "http://www.tvmaze.com/episodes/939575/college-gameday-31x10-episode-10",
      "name": "Episode 10",
      "season": 31,
      "number": 10,
      "airdate": "2016-10-29",
      "airtime": "09:00",
      "airstamp": "2016-10-29T09:00:00-04:00",
      "runtime": 180,
      "image": null,
      "summary": "<p>Live from Salt Lake City, Utah as Rece Davis, Lee Corso, Kirk Herbstreit and Desmond Howard provide game angles and analysis.\n </p>",
      "show": {
        "id": 9530,
        "url": "http://www.tvmaze.com/shows/9530/college-gameday",
        "name": "College GameDay",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 180,
        "premiered": "1987-09-05",
        "schedule": {
          "time": "09:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 39,
          "name": "ESPN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/83373.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/83373.jpg"
        },
        "summary": "<p><strong>College GameDay</strong> is an ESPN entertainment show previewing college football games. It first aired in 1987 with Tim Brando as host and Lee Corso and Beano Cook as commentators, giving an overview of college football games, but the show underwent a radical transformation beginning in 1993, and began incorporating live broadcasts. The official name of the show is <i>College GameDay built by The Home Depot</i>. There is a separate radio broadcast, <i>ESPN Radio College GameDay</i>, on ESPN Radio. Today, the only original cast member remaining is Lee Corso. Rece Davis serves as host and Kirk Herbstreit is Corso's counterpart. Starting in 2008, Desmond Howardhas been added to the cast in the show's introduction. Craig James served as an analyst from 1990 to 1995. Erin Andrews joined the <i>GameDay</i> crew as a co-host and contributor in 2010, replaced in 2012 by Samantha Ponder. On September 5, 2015, Rece Davis (also host of the college basketball version of <i>GameDay</i>), replaced Chris Fowler as host of the college football version, which itself started its 29th season on that day.</p><p>The show is known for its prediction segment that appears on each broadcast. Typically there are three predictors: Corso, Herbstreit, and an invited guest, usually a celebrity, prominent athlete, or radio personality associated with the host university or school for that week. The end of the show always concludes with a catch phrase and prediction from Corso, who subsequently dons the mascot's headgear of the school he predicts to win the game, usually to the ire or excitement of local fans. Beginning with the 2013 season, <i>GameDay</i> airs for three hours on ESPN. Previously, beginning in 2010, the first hour of the show was broadcast on ESPNU at 9am ET, with the 2 remaining hours of the show on ESPN from 10am-noon ET.</p>",
        "updated": 1477525995,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9530"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/939575"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/974495"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/939575"
        }
      }
    }, {
      "id": 944484,
      "url": "http://www.tvmaze.com/episodes/944484/sesame-street-46x35-snazzy-society",
      "name": "Snazzy Society",
      "season": 46,
      "number": 35,
      "airdate": "2016-10-29",
      "airtime": "09:00",
      "airstamp": "2016-10-29T09:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 6544,
        "url": "http://www.tvmaze.com/shows/6544/sesame-street",
        "name": "Sesame Street",
        "type": "Scripted",
        "language": "English",
        "genres": ["Children"],
        "status": "Running",
        "runtime": 30,
        "premiered": "1969-11-10",
        "schedule": {
          "time": "09:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 10
        },
        "weight": 0,
        "network": {
          "id": 8,
          "name": "HBO",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 5152,
          "thetvdb": 78419,
          "imdb": "tt0063951"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/24/62303.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/24/62303.jpg"
        },
        "summary": "<p><strong><em>\"Sesame Street\"</em></strong> is a widely recognized and perpetually daring experiment in educational children's programming. This show has taken popular-culture and turned it upside-down. The fast-paced advertisements that had parents of the new era worrying for their children were the basis for the original format of this show. The show has often satirized pop culture, and made itself easier for parents to watch along too. And thus, the positive impact this show has had on modern society is beyond another. No show is more recognized the world over by as many generations and walks of life. Shown in its original format or with changes to reflect a regional education focus, Sesame Street is now seen in over 140 countries. The show that Entertainment Weekly named the \"20th Best Ever Show\" has changed the education scene to focus on \"entertainment\". This has turned out to be a valuable theory that not only...</p>",
        "updated": 1475115952,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/6544"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/944484"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/944484"
        }
      }
    }, {
      "id": 961190,
      "url": "http://www.tvmaze.com/episodes/961190/dog-whisperer-with-cesar-millan-family-edition-3x09-buttons-and-princess",
      "name": "Buttons and Princess",
      "season": 3,
      "number": 9,
      "airdate": "2016-10-29",
      "airtime": "09:00",
      "airstamp": "2016-10-29T09:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>The behavior of two small dogs may result in their owners having to move out of their apartment building.</p>",
      "show": {
        "id": 2522,
        "url": "http://www.tvmaze.com/shows/2522/dog-whisperer-with-cesar-millan-family-edition",
        "name": "Dog Whisperer with Cesar Millan: Family Edition",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2014-10-04",
        "schedule": {
          "time": "09:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 7
        },
        "weight": 0,
        "network": {
          "id": 5,
          "name": "The CW",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 45369,
          "thetvdb": 299404,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/13/33781.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/13/33781.jpg"
        },
        "summary": "<p>In <strong>Dog Whisperer with Cesar Millan: Family Edition</strong>, renowned dog behaviorist Cesar Millan travels far and wide to help pups and their families. Millan rehabilitates dogs and trains families to achieve a balance and natural relationship between people and their pets, and goes directly into the homes of dog owners to document the remarkable transformations that occur.</p>",
        "updated": 1477746809,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/2522"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961191"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/975742"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961190"
        }
      }
    }, {
      "id": 961245,
      "url": "http://www.tvmaze.com/episodes/961245/lucky-dog-4x05-teri",
      "name": "Teri",
      "season": 4,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "09:00",
      "airstamp": "2016-10-29T09:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>When a retired couple battling Parkinson's disease seeks a dog that will help them stay active, Brandon finds a high-energy terrier.</p>",
      "show": {
        "id": 7229,
        "url": "http://www.tvmaze.com/shows/7229/lucky-dog",
        "name": "Lucky Dog",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2013-09-28",
        "schedule": {
          "time": "09:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 2,
          "name": "CBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 37902,
          "thetvdb": 274341,
          "imdb": "tt3220976"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/26/67210.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/26/67210.jpg"
        },
        "summary": "<p>On <strong>Lucky Dog</strong>, animal trainer Brandon McMillan's second home is the neighborhood animal shelter where he is determined to rescue hard-to-love, out-of control, untrained and unadoptable dogs. Then, back at Brandon's training facility known as the Lucky Dog Ranch, he embarks on the seemingly impossible task of turning the frightened pooches into perfect pets. In the end, a lucky family will adopt an even luckier dog, making each episode an adoption story that warms the heart.</p>",
        "updated": 1477745920,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7229"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961245"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961245"
        }
      }
    }, {
      "id": 961657,
      "url": "http://www.tvmaze.com/episodes/961657/uprooted-1x05-a-food-lover-in-paris",
      "name": "A Food Lover in Paris",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "09:00",
      "airstamp": "2016-10-29T09:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Sarah Sharratt explores the modern food scene in Paris and sets \nout to better understand how Parisians eat. From food markets to luxury \nfood shops, a private dinner party to a private cooking lesson with the \ncity's hottest chef, Sarah leaves no cocktail unmixed or pastry uneaten \nin her gastronomic quest.</p>",
      "show": {
        "id": 22047,
        "url": "http://www.tvmaze.com/shows/22047/uprooted",
        "name": "UpRooted",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "09:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 174,
          "name": "Cooking Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/80/200540.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/80/200540.jpg"
        },
        "summary": "<p>Cordon Bleu-trained cook and enthusiastic food-lover Sarah Sharratt navigates her way through a new life in rural France, experiencing as much of the culture, people and food as she can until she is <strong><strong>UpRooted</strong></strong>. </p>",
        "updated": 1477731799,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22047"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961657"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/961663"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961657"
        }
      }
    }, {
      "id": 967787,
      "url": "http://www.tvmaze.com/episodes/967787/outlaw-truck-and-tractor-pull-1x05-rock-valley-ia-part-5",
      "name": "Rock Valley, IA Part 5",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "09:00",
      "airstamp": "2016-10-29T09:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 22225,
        "url": "http://www.tvmaze.com/shows/22225/outlaw-truck-and-tractor-pull",
        "name": "Outlaw Truck and Tractor Pull",
        "type": "Sports",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "09:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 142,
          "name": "Velocity",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/81/203380.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/81/203380.jpg"
        },
        "summary": "<p><strong>Outlaw Truck and Tractor Pull</strong>, also known as <i>power pulling</i>, is a motorsport competition which requires modified tractors to pull a heavy sledge (sled) along a 35 ft wide and length of 100 meter or 300 ft+ track, with the winner being the tractor that pulls the sledge farthest. The sport is known as the world's most powerful motorsport, due to the multi-engined modified tractor pullers. The Outlaw Truck and Tractor Pulling Association (www.outlawpulling.com) has agreed to sanction and produce a 3 class, national level truck and tractor pull in Enid, OK on June 20th. The Outlaw Association offers &amp; sanctions 13 different classes all of which can be seen on TV for 12 weeks starting this coming October on the Velocity HD channel. The Outlaw season starts the last weekend of May continuing through Mid September. The completion area covers from, Sturgis, SD, to Taylor, TX and from Hutchinson, KS to Jefferson City, MO with 54 towns in between those points.</p>",
        "updated": 1477155767,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22225"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/967787"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/967787"
        }
      }
    }, {
      "id": 944479,
      "url": "http://www.tvmaze.com/episodes/944479/the-7d-2x19-once-in-a-purple-moon-water-ya-doin-dopey",
      "name": "Once in a Purple Moon | Water Ya Doin', Dopey?",
      "season": 2,
      "number": 19,
      "airdate": "2016-10-29",
      "airtime": "09:30",
      "airstamp": "2016-10-29T09:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p><strong>Once in a Purple Moon</strong> - When a rare moon event causes Happy and \nGrumpy to turn into something awful, they try to hide from the others.</p><p><strong>Water Ya Doin', Dopey?</strong> - After Hildy botches her new aging \nspell and turns herself and the Queen into old ladies, the 7D search for\n The Fountain of Youth.</p>",
      "show": {
        "id": 3271,
        "url": "http://www.tvmaze.com/shows/3271/the-7d",
        "name": "The 7D",
        "type": "Animation",
        "language": "English",
        "genres": ["Comedy", "Adventure", "Children"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2014-07-07",
        "schedule": {
          "time": "09:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 25,
          "name": "Disney XD",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": {
          "id": 123,
          "name": "WATCH Disney XD",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "externals": {
          "tvrage": 42855,
          "thetvdb": 283115,
          "imdb": "tt2219622"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/17/43873.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/17/43873.jpg"
        },
        "summary": "<p><em>T</em><i><em>he 7D</em></i> is a Disney animated series centering around the Seven Dwarfs from the classic film <i>Snow White and the Seven Dwarfs</i>. </p>",
        "updated": 1476547290,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/3271"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/944479"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/944479"
        }
      }
    }, {
      "id": 961191,
      "url": "http://www.tvmaze.com/episodes/961191/dog-whisperer-with-cesar-millan-family-edition-3x10-bad-news-bella",
      "name": "Bad News Bella",
      "season": 3,
      "number": 10,
      "airdate": "2016-10-29",
      "airtime": "09:30",
      "airstamp": "2016-10-29T09:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Cesar helps a woman who worries about her French bulldog's increasingly aggressive behavior.</p>",
      "show": {
        "id": 2522,
        "url": "http://www.tvmaze.com/shows/2522/dog-whisperer-with-cesar-millan-family-edition",
        "name": "Dog Whisperer with Cesar Millan: Family Edition",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2014-10-04",
        "schedule": {
          "time": "09:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 7
        },
        "weight": 0,
        "network": {
          "id": 5,
          "name": "The CW",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 45369,
          "thetvdb": 299404,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/13/33781.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/13/33781.jpg"
        },
        "summary": "<p>In <strong>Dog Whisperer with Cesar Millan: Family Edition</strong>, renowned dog behaviorist Cesar Millan travels far and wide to help pups and their families. Millan rehabilitates dogs and trains families to achieve a balance and natural relationship between people and their pets, and goes directly into the homes of dog owners to document the remarkable transformations that occur.</p>",
        "updated": 1477746809,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/2522"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961191"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/975742"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961191"
        }
      }
    }, {
      "id": 961244,
      "url": "http://www.tvmaze.com/episodes/961244/dr-chris-pet-vet-4x05-the-pelican-twins",
      "name": "The Pelican Twins",
      "season": 4,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "09:30",
      "airstamp": "2016-10-29T09:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>A sick pelican chick with a swollen neck; removing a deadly funnel web spider from the home of a woman and her two daughters.</p>",
      "show": {
        "id": 7230,
        "url": "http://www.tvmaze.com/shows/7230/dr-chris-pet-vet",
        "name": "Dr. Chris Pet Vet",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2013-09-28",
        "schedule": {
          "time": "09:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 2,
          "name": "CBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 37903,
          "thetvdb": 283712,
          "imdb": "tt3839272"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/26/67218.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/26/67218.jpg"
        },
        "summary": "<p>Chronicling the adventures of Dr. Chris Brown, <strong>Dr. Chris Pet Vet</strong> gives viewers unique insights into the life of one of the world's busiest vets and the animals to whom he's devoted his life. For those animals that require special services, Dr. Chris calls on his good friend and colleague Dr. Lisa Chimes, who works at an animal hospital specializing in unique animal care. Each episode of \"Dr. Chris Pet Vet\" delivers not only a carefully crafted mix of human and animal interest stories, but also features a variety of animals undergoing a range of medical procedures from elective surgery to highly advanced medical procedures.</p>",
        "updated": 1477746054,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7230"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961244"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961244"
        }
      }
    }, {
      "id": 967821,
      "url": "http://www.tvmaze.com/episodes/967821/menards-chevy-series-1x05-bandimere-speedway-denver-co",
      "name": "Bandimere Speedway Denver, CO",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "09:30",
      "airstamp": "2016-10-29T09:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Highlights from the Bandimere Speeway in Denver, Colorado.</p>",
      "show": {
        "id": 22226,
        "url": "http://www.tvmaze.com/shows/22226/menards-chevy-series",
        "name": "Menards Chevy Series",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "09:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 142,
          "name": "Velocity",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/81/203383.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/81/203383.jpg"
        },
        "summary": "<p>The <strong>Menards Chevy Series</strong>will spotlight some of the most outstanding Chevy varieties, including Corvettes, Camaros, Chevelles, El Caminos, Monte Carlos and many more. The series will feature current to late restored models alongside of the dedicated owner that set them aside from daily drivers. Not only will the series promote externally appealing Chevys, but also the individual story behind each restoration. Special selections and award winners will also be spotlighted during the series.The 13 episode series will include footage from each individual event, concluded by an episode of collected highlights to end the season. Select shows will also include highlights of high speed drag racing from some of the fastest Chevys in the nation. Tune in to the Velocity Network on October 1, at 9:30 am EST for the premier of the Menards Chevy Series. The series will continue every Saturday from October 1 to December 24, 2016. </p>",
        "updated": 1477155707,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22226"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/967821"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/967822"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/967821"
        }
      }
    }, {
      "id": 939887,
      "url": "http://www.tvmaze.com/episodes/939887/the-pioneer-woman-14x11-crazy-sweet-treats",
      "name": "Crazy Sweet Treats",
      "season": 14,
      "number": 11,
      "airdate": "2016-10-29",
      "airtime": "10:00",
      "airstamp": "2016-10-29T10:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 6110,
        "url": "http://www.tvmaze.com/shows/6110/the-pioneer-woman",
        "name": "The Pioneer Woman",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2011-08-27",
        "schedule": {
          "time": "10:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 6
        },
        "weight": 0,
        "network": {
          "id": 81,
          "name": "Food Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 29097,
          "thetvdb": 252240,
          "imdb": "tt2151337"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/23/59332.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/23/59332.jpg"
        },
        "summary": "<p>Take one sassy former city girl, her hunky rancher husband, a band of adorable kids, an extended family, cowboys, 3,000 wild mustangs, a herd of cattle and one placid basset hound and you have <strong>The Pioneer Woman</strong>. </p><p>The Pioneer Woman is an open invitation into Ree Drummond's life: The award-winning blogger and best-selling cookbook author comes to Food Network and shares her special brand of home cooking, from throw-together suppers to elegant celebrations. The series, set against the incredible story of life at home on the range, is the next best thing to actually sitting on a stool in Ree's kitchen.</p>",
        "updated": 1477564802,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/6110"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/939887"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/956521"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/939887"
        }
      }
    }, {
      "id": 943643,
      "url": "http://www.tvmaze.com/episodes/943643/e-news-weekend-20x43-episode-43",
      "name": "Episode 43",
      "season": 20,
      "number": 43,
      "airdate": "2016-10-29",
      "airtime": "10:00",
      "airstamp": "2016-10-29T10:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 9531,
        "url": "http://www.tvmaze.com/shows/9531/e-news-weekend",
        "name": "E! News Weekend",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2007-09-08",
        "schedule": {
          "time": "10:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 43,
          "name": "E!",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 1065757365,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/83374.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/83374.jpg"
        },
        "summary": "<p><strong>E! News Weekend</strong> is the weekend edition of \"E! News\" continues delivering viewers entertainment news after the workweek ends. The hourlong broadcast features recaps of the week's top stories and celebrity interviews. TV, movies and music are among the categories covered by the show, in addition to celebrity gossip, because who doesn't like a juicy rumor or two involving your favorite stars? Jason Kennedy and Catt Sadler host.</p>",
        "updated": 1477524565,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9531"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/943643"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/943644"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/943643"
        }
      }
    }, {
      "id": 961273,
      "url": "http://www.tvmaze.com/episodes/961273/the-henry-fords-innovation-nation-3x05-3d-printed-body-parts",
      "name": "3D Printed Body Parts",
      "season": 3,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "10:00",
      "airstamp": "2016-10-29T10:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>A device that pulls power from rivers; 3D printing human body parts; marketing presidential candidates; Bison fur coat filling.</p>",
      "show": {
        "id": 2521,
        "url": "http://www.tvmaze.com/shows/2521/the-henry-fords-innovation-nation",
        "name": "The Henry Ford's Innovation Nation",
        "type": "Documentary",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2014-09-27",
        "schedule": {
          "time": "10:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 2,
          "name": "CBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 45174,
          "thetvdb": 287166,
          "imdb": "tt4086030"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/13/33777.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/13/33777.jpg"
        },
        "summary": "<p>Hosted by CBS News correspondent Mo Rocca, each episode of <strong>The Henry Ford's Innovation Nation </strong>will tell the fascinating stories behind the world's greatest inventions — and the perseverance, passion and price required to bring them to life.</p>",
        "updated": 1477746101,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/2521"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961273"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961273"
        }
      }
    }, {
      "id": 969563,
      "url": "http://www.tvmaze.com/episodes/969563/jack-hannas-wild-countdown-6x05-silent-but-deadly",
      "name": "Silent but Deadly",
      "season": 6,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "10:00",
      "airstamp": "2016-10-29T10:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Big cats; gigantic spiders; killer reptiles; stealthy raptors.</p>",
      "show": {
        "id": 12153,
        "url": "http://www.tvmaze.com/shows/12153/jack-hannas-wild-countdown",
        "name": "Jack Hanna's Wild Countdown",
        "type": "Reality",
        "language": "English",
        "genres": ["Nature"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2011-09-03",
        "schedule": {
          "time": "10:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 3,
          "name": "ABC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 283661,
          "imdb": "tt3062384"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/40/102191.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/40/102191.jpg"
        },
        "summary": "<p>Jack Hanna has hosted TV shows about wildlife since the premiere of <em>Jack Hanna's Animal Adventures</em> in 1993 and has become a zoological authority in his 30-plus years working at the Columbus Zoo and Aquarium in Ohio. On <strong>Jack Hanna's Wild Countdown</strong>, he uses his knowledge and experience to present count-down lists of rare, fascinating creatures -- appropriate, given Hanna's many appearances on <em>Late Show with David Letterman</em>. Topics include beasts equipped with armor, deceptively cute -- but dangerous -- animals, and adorable baby critters.</p>",
        "updated": 1477746942,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/12153"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/969563"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/969564"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/969563"
        }
      }
    }, {
      "id": 969567,
      "url": "http://www.tvmaze.com/episodes/969567/sea-rescue-6x05-halloween-heroes",
      "name": "Halloween Heroes",
      "season": 6,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "10:00",
      "airstamp": "2016-10-29T10:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 12146,
        "url": "http://www.tvmaze.com/shows/12146/sea-rescue",
        "name": "Sea Rescue",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2012-04-07",
        "schedule": {
          "time": "10:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 3,
          "name": "ABC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 257984,
          "imdb": "tt2353113"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/40/102175.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/40/102175.jpg"
        },
        "summary": "<p><strong>Sea Rescue</strong> showcases amazing stories of the rescue, rehabilitation and return to the wild of marine animals by a team of dedicated veterinarians, animal care experts, animal science researchers and government authorities. Led by one of the nation's most recognized and respected journalists, Sam Champion, Sea Rescue takes viewers on incredible and heartwarming adventures through a combination of first-hand accounts, expert insight and remarkable footage.</p>",
        "updated": 1477183892,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/12146"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/969567"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/969568"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/969567"
        }
      }
    }, {
      "id": 975953,
      "url": "http://www.tvmaze.com/episodes/975953/am-joy-2016-10-29-102916",
      "name": "10/29/16",
      "season": 2016,
      "number": 49,
      "airdate": "2016-10-29",
      "airtime": "10:00",
      "airstamp": "2016-10-29T10:00:00-04:00",
      "runtime": 120,
      "image": null,
      "summary": "",
      "show": {
        "id": 17116,
        "url": "http://www.tvmaze.com/shows/17116/am-joy",
        "name": "AM Joy",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 120,
        "premiered": "2016-05-07",
        "schedule": {
          "time": "10:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": 10
        },
        "weight": 0,
        "network": {
          "id": 201,
          "name": "MSNBC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/67/167707.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/67/167707.jpg"
        },
        "summary": "<p>On <strong>AM Joy</strong>, Joy Reid tackles the most important news and political topics of the week.</p>",
        "updated": 1477709710,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/17116"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/975953"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/975954"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/975953"
        }
      }
    }, {
      "id": 936865,
      "url": "http://www.tvmaze.com/episodes/936865/spongebob-squarepants-11x19-mermaidpants",
      "name": "MermaidPants",
      "season": 11,
      "number": 19,
      "airdate": "2016-10-29",
      "airtime": "10:30",
      "airstamp": "2016-10-29T10:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>SpongeBob and Patrick have fun playing as superheroes Mermaid Man and Barnacle Boy until their sworn enemies arrive.\n </p>",
      "show": {
        "id": 713,
        "url": "http://www.tvmaze.com/shows/713/spongebob-squarepants",
        "name": "SpongeBob SquarePants",
        "type": "Animation",
        "language": "English",
        "genres": ["Comedy", "Children"],
        "status": "Running",
        "runtime": 30,
        "premiered": "1999-05-01",
        "schedule": {
          "time": "10:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 10
        },
        "weight": 1,
        "network": {
          "id": 27,
          "name": "Nickelodeon",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 5304,
          "thetvdb": 75886,
          "imdb": "tt0206512"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/6/15043.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/6/15043.jpg"
        },
        "summary": "<p><strong>SpongeBob SquarePants</strong> is a chipper sea sponge and his nautical neighbors make waves in the deep-sea city of Bikini Bottom in this clever and playful kiddie cartoon aimed at preschoolers. SpongeBob's acquaintances include goofy starfish Patrick, cheerful squirrel Sandy Cheeks (who lives in an air bubble) and grouchy Squidward.</p>",
        "updated": 1477724021,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/713"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/936865"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/936865"
        }
      }
    }, {
      "id": 939899,
      "url": "http://www.tvmaze.com/episodes/939899/trishas-southern-kitchen-8x10-masquerade-and-cocktails",
      "name": "Masquerade and Cocktails",
      "season": 8,
      "number": 10,
      "airdate": "2016-10-29",
      "airtime": "10:30",
      "airstamp": "2016-10-29T10:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 11116,
        "url": "http://www.tvmaze.com/shows/11116/trishas-southern-kitchen",
        "name": "Trisha's Southern Kitchen",
        "type": "Reality",
        "language": "English",
        "genres": ["Food", "Family"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2012-04-14",
        "schedule": {
          "time": "10:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 81,
          "name": "Food Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 280281,
          "imdb": "tt2210101"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/37/93404.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/37/93404.jpg"
        },
        "summary": "<p>Music superstar and best-selling cookbook author Trisha Yearwood \nwelcomes you into her Southern kitchen to share in some of her favorite \nfamily recipes, both old and new. Trisha shows off her genuine Southern \nhospitality as she puts together meals with friends and family. Whether \nthey're for a family reunion, a party for one of her bandmates or just a\n day hanging out with her girlfriends, Trisha's recipes are fun and easy\n to make and always have a story to tell on <strong>Trisha's Southern Kitchen</strong>.</p>",
        "updated": 1477723681,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/11116"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/939899"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/962510"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/939899"
        }
      }
    }, {
      "id": 961452,
      "url": "http://www.tvmaze.com/episodes/961452/the-inspectors-2x05-the-one-that-got-away",
      "name": "The One That Got Away",
      "season": 2,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "10:30",
      "airstamp": "2016-10-29T10:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Preston struggles to open up at his new physical therapy group; Noah speaks to his crush's boyfriend; a criminal from the Ivory Coast scams investors with fraudulent gold.</p>",
      "show": {
        "id": 4266,
        "url": "http://www.tvmaze.com/shows/4266/the-inspectors",
        "name": "The Inspectors",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2015-10-03",
        "schedule": {
          "time": "10:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 2,
          "name": "CBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 295163,
          "imdb": "tt4711356"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/26/67251.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/26/67251.jpg"
        },
        "summary": "<p><strong>The Inspectors</strong> is a new scripted dramatic series set in Washington, D.C., inspired by compelling real cases handled by the United States Postal Inspection Service. In the series, Preston Wainwright (Bret Green), a determined teen who is thriving after being paralyzed in a car accident, works as an intern for his U.S. Postal Inspector mom, Amanda (Jessica Lundy), helping to solve crimes ranging from Internet scams, identity and mail theft, to consumer fraud.</p><p>The Inspectors strives to educate young people about making the right choices in their daily lives, encourages open communication between teens and parents and includes positive messaging regarding living with disabilities, overcoming challenges, beating the odds and the power of perseverance. Also starring in the series are Terry Serpico, Harrison Knight and Erica-Marie Sanchez. The United States Postal Inspection Service, the nation's oldest federal law enforcement agency, will serve as the show's official programming resource.</p>",
        "updated": 1477139779,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/4266"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961452"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961452"
        }
      }
    }, {
      "id": 969559,
      "url": "http://www.tvmaze.com/episodes/969559/ocean-treks-with-jeff-corwin-1x05-skagway-great-northern-adventure",
      "name": "Skagway: Great Northern Adventure",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "10:30",
      "airstamp": "2016-10-29T10:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 22285,
        "url": "http://www.tvmaze.com/shows/22285/ocean-treks-with-jeff-corwin",
        "name": "Ocean Treks with Jeff Corwin",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "10:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 72,
          "name": "Syndication",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/81/203766.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/81/203766.jpg"
        },
        "summary": "<p>Emmy-winning host Jeff Corwin takes viewers aboard some of the world's top cruise ships with this series. Corwin experiences some of Earth's natural wonders while stopping at various ports during his journey. As he explores the areas where he stops, Corwin goes on adventures that have him doing activities like climbing mountains, going on deep sea dives and touring glaciers. As most viewers won't get a chance to experience such events themselves, Corwin gives them a chance to experience them through his adventures.</p>",
        "updated": 1477197847,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22285"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/969559"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/969560"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/969559"
        }
      }
    }, {
      "id": 975753,
      "url": "http://www.tvmaze.com/episodes/975753/vacation-creation-1x05-alaskan-adventure",
      "name": "Alaskan Adventure",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "10:30",
      "airstamp": "2016-10-29T10:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Tommy and Andrea plan an Alaskan cruise for a retired law enforcement officer, who lost his sight in one eye due to a rare disease, and his family.</p>",
      "show": {
        "id": 22417,
        "url": "http://www.tvmaze.com/shows/22417/vacation-creation",
        "name": "Vacation Creation",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "10:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 5,
          "name": "The CW",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206340.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206340.jpg"
        },
        "summary": "<p>Comic Tommy Davidson (\"In Living Color\") and YouTube personality Andrea Feczko present deserving individuals, couples and families with exotic vacations in this benevolent travel series. People from diverse backgrounds who have weathered unique hardships are transported to faraway places for some much-needed rest and relaxation. Each trip is carefully planned to align with the location and setting choice of the family or individual, with the aim of creating a once-in-a-lifetime, unforgettable experience.</p>",
        "updated": 1477763029,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22417"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/975753"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/975754"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/975753"
        }
      }
    }, {
      "id": 961453,
      "url": "http://www.tvmaze.com/episodes/961453/dinner-spinner-presented-by-allrecipes-1x05-tricks-treats",
      "name": "Tricks & Treats!",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "11:00",
      "airstamp": "2016-10-29T11:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Ann and Sabrina compete to make the best chocolate dessert for Halloween.</p>",
      "show": {
        "id": 21278,
        "url": "http://www.tvmaze.com/shows/21278/dinner-spinner-presented-by-allrecipes",
        "name": "Dinner Spinner Presented by Allrecipes",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "In Development",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "11:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 5,
          "name": "The CW",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/75/189996.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/75/189996.jpg"
        },
        "summary": "<p>Home cooks compete in a race to create the most unique and flavorful dinnertime meals in a series that inspires and celebrates culinary creativity. Noted chef and TV personality Gabe Kennedy hosts as two contestants go head-to-head in a mealtime challenge. A panel of three celebrity judges critiques the final dishes and determines the winner. In each episode, the healthy competition is combined with learning opportunities as nutritional experts explain the value of choosing healthy foods and wholesome ingredients.</p>",
        "updated": 1477696273,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/21278"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961453"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/975744"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961453"
        }
      }
    }, {
      "id": 963490,
      "url": "http://www.tvmaze.com/episodes/963490/the-way-home-1x02-dare-to-prepare",
      "name": "Dare to Prepare",
      "season": 1,
      "number": 2,
      "airdate": "2016-10-29",
      "airtime": "11:00",
      "airstamp": "2016-10-29T11:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Making the most of furniture and accent pieces in the home; designer Kim Myles gives tips on entertaining a crowd.</p>",
      "show": {
        "id": 22094,
        "url": "http://www.tvmaze.com/shows/22094/the-way-home",
        "name": "The Way Home",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "In Development",
        "runtime": 60,
        "premiered": "2016-10-22",
        "schedule": {
          "time": "11:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 18,
          "name": "Lifetime",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": null,
        "summary": "<p>What do you get when you combine home décor inspiration, smart solutions for everyday life, and unbeatable deals? <strong>The Way Home</strong> is a new kind of TV series jam-packed with on-trend furniture, décor, cookware, storage solutions, and many more products from Wayfair. The best part? You'll be able to shop everything you see on the show at Wayfair as soon as the credits roll and watch all of your favorite episodes online!</p>",
        "updated": 1477731526,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22094"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/963490"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/963729"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/963490"
        }
      }
    }, {
      "id": 972355,
      "url": "http://www.tvmaze.com/episodes/972355/rock-the-park-3x05-denali-gold-bears-bike-rides",
      "name": "Denali: Gold, Bears & Bike Rides",
      "season": 3,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "11:00",
      "airstamp": "2016-10-29T11:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 7891,
        "url": "http://www.tvmaze.com/shows/7891/rock-the-park",
        "name": "Rock the Park",
        "type": "Documentary",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2014-10-04",
        "schedule": {
          "time": "11:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 3,
          "name": "ABC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 301828,
          "imdb": "tt4093626"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/40/102146.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/40/102146.jpg"
        },
        "summary": "<p><strong>Rock the Park</strong> taps into America's love affair with our national parks. Our hosts, Jack Steward and Colton Smith, have made it their life's mission to explore every national park in this country. In the process, they come face to face with nature and push their physical limits as they go off the beaten path to discover some of the most awe-inspiring places on earth. The series is designed to inspire other Americans to seek adventure in the national parks.</p>",
        "updated": 1477402829,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7891"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/972355"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/972356"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/972355"
        }
      }
    }, {
      "id": 975480,
      "url": "http://www.tvmaze.com/episodes/975480/the-kitchen-11x06-halloween-tricks-and-treats",
      "name": "Halloween Tricks and Treats",
      "season": 11,
      "number": 6,
      "airdate": "2016-10-29",
      "airtime": "11:00",
      "airstamp": "2016-10-29T11:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 3344,
        "url": "http://www.tvmaze.com/shows/3344/the-kitchen",
        "name": "The Kitchen",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 60,
        "premiered": "2014-01-04",
        "schedule": {
          "time": "11:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 81,
          "name": "Food Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 39544,
          "thetvdb": 278664,
          "imdb": "tt3475084"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/17/44135.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/17/44135.jpg"
        },
        "summary": "<p>Spend a fun and food-filled morning in <strong>The Kitchen</strong>, with hosts Sunny Anderson, Katie Lee, Jeff Mauro, Marcela Valladolid and Geoffrey Zakarian. From simple supper ideas, food trend discussions and family meal tips to trivia games and viewer questions, they'll cover all things fun in food.</p>",
        "updated": 1477723779,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/3344"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/975480"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/975481"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/975480"
        }
      }
    }, {
      "id": 961497,
      "url": "http://www.tvmaze.com/episodes/961497/the-open-road-with-dr-chris-1x05-defying-gravity",
      "name": "Defying Gravity",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "11:30",
      "airstamp": "2016-10-29T11:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Unique birds on Lord Howe Island; Dr. Chris tackles gravity-defying challenges, including climbing a coconut tree.</p>",
      "show": {
        "id": 21283,
        "url": "http://www.tvmaze.com/shows/21283/the-open-road-with-dr-chris",
        "name": "The Open Road with Dr. Chris",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "In Development",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "11:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 2,
          "name": "CBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/75/188238.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/75/188238.jpg"
        },
        "summary": "<p>The veterinarian travels the world, uncovering the best-kept secret in each region.</p>",
        "updated": 1477746179,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/21283"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961497"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961497"
        }
      }
    }, {
      "id": 975976,
      "url": "http://www.tvmaze.com/episodes/975976/unlikely-animal-friends-4x06-the-cats-pajamas",
      "name": "The Cat's Pajamas",
      "season": 4,
      "number": 6,
      "airdate": "2016-10-29",
      "airtime": "11:30",
      "airstamp": "2016-10-29T11:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>A deer grooms a lynx; a black leopard befriends a white rabbit.</p>",
      "show": {
        "id": 4867,
        "url": "http://www.tvmaze.com/shows/4867/unlikely-animal-friends",
        "name": "Unlikely Animal Friends",
        "type": "Reality",
        "language": "English",
        "genres": ["Nature"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2012-11-23",
        "schedule": {
          "time": "11:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 5,
          "name": "The CW",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 264210,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206116.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206116.jpg"
        },
        "summary": "<p>Friends are there for you when you need a shoulder to lean on. But who says only humans have friends? Join us for <strong>Unlikely Animal Friends.</strong></p>",
        "updated": 1477710326,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/4867"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/975976"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/975976"
        }
      }
    }, {
      "id": 912740,
      "url": "http://www.tvmaze.com/episodes/912740/growing-a-greener-world-7x18-controlling-garden-pests-diseases-and-weeds-organically",
      "name": "Controlling Garden Pests, Diseases, and Weeds Organically",
      "season": 7,
      "number": 18,
      "airdate": "2016-10-29",
      "airtime": "",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": null,
      "image": null,
      "summary": "<p>Using all organic methods to combat garden pests, diseases and weeds.</p>",
      "show": {
        "id": 14862,
        "url": "http://www.tvmaze.com/shows/14862/growing-a-greener-world",
        "name": "Growing a Greener World",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": null,
        "premiered": "2010-05-06",
        "schedule": {
          "time": "",
          "days": []
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 261788,
          "imdb": "tt1649538"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/50/125988.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/50/125988.jpg"
        },
        "summary": "<p><em>Growing a Greener World</em> is a groundbreaking television series that delivers the latest trends in eco-friendly living mixed with traditional gardening know-how to a modern audience. The series will inspire viewers of all ages with stunning HD video, a fresh and engaging style, and always a compelling story. Each episode will feature the people, organizations, and events that are making a difference in our world today by raising awareness and influencing others to better stewardship of the environment we all share.</p>",
        "updated": 1472995971,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/14862"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/912740"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/912742"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/912740"
        }
      }
    }, {
      "id": 936888,
      "url": "http://www.tvmaze.com/episodes/936888/power-rangers-23x18-worgworld",
      "name": "Worgworld",
      "season": 23,
      "number": 18,
      "airdate": "2016-10-29",
      "airtime": "12:00",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>The Rangers have to act quickly when an evil monster's music causes anyone who listens to it to become a zombie.</p>",
      "show": {
        "id": 794,
        "url": "http://www.tvmaze.com/shows/794/power-rangers",
        "name": "Power Rangers",
        "type": "Scripted",
        "language": "English",
        "genres": ["Action", "Children", "Science-Fiction"],
        "status": "Running",
        "runtime": 30,
        "premiered": "1993-08-28",
        "schedule": {
          "time": "12:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 8
        },
        "weight": 1,
        "network": {
          "id": 27,
          "name": "Nickelodeon",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 4877,
          "thetvdb": 72553,
          "imdb": "tt0106064"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/6/15520.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/6/15520.jpg"
        },
        "summary": "<p><strong>Power Rangers</strong> is a children's television series adapted from the Japanese tokusatsu Super Sentai Series. A team of five high school students are selected by Zordon to battle evil. Using martial arts, special weapons, and gigantic robots called \"Zords\", they protect their city Angel Grove from monsters and witches.</p>",
        "updated": 1477731258,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/794"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/936888"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/939876"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/936888"
        }
      }
    }, {
      "id": 955399,
      "url": "http://www.tvmaze.com/episodes/955399/rick-steves-europe-9x04-bulgaria",
      "name": "Bulgaria",
      "season": 9,
      "number": 4,
      "airdate": "2016-10-29",
      "airtime": "",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>A tour of Bulgaria spotlights the country's complex history, including ancient Thracian tombs, medieval Orthodox Christian monasteries and Soviet-era monuments. Also: its contemporary culture.</p>",
      "show": {
        "id": 9872,
        "url": "http://www.tvmaze.com/shows/9872/rick-steves-europe",
        "name": "Rick Steves' Europe",
        "type": "Documentary",
        "language": "English",
        "genres": ["Travel"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2000-09-03",
        "schedule": {
          "time": "",
          "days": []
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 74691,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/84923.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/84923.jpg"
        },
        "summary": "<p>Rick Steves has been the \"travel guinea pig\" for American Public Television since Travels in Europe with Rick Steves debuted in April of 1991. He continues his travels under a new title, but it's obviously the same format. Rick shows some out-of-the-way places the average traveler misses, offers countless travel tips, and always enjoys being immersed in the adventure.</p>",
        "updated": 1476024605,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9872"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/955399"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/955400"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/955399"
        }
      }
    }, {
      "id": 962941,
      "url": "http://www.tvmaze.com/episodes/962941/ayeshas-homemade-1x02-girls-brunch",
      "name": "Girls' Brunch",
      "season": 1,
      "number": 2,
      "airdate": "2016-10-29",
      "airtime": "12:00",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Ayesha Curry enjoys a decadent girls' brunch with her friends; bloody \nMarys topped with brown sugar bacon; citrus shrimp salad; sausage \nstuffed mushrooms; spinach feta rolls; skillet s'mores.</p>",
      "show": {
        "id": 22090,
        "url": "http://www.tvmaze.com/shows/22090/ayeshas-homemade",
        "name": "Ayesha's Homemade",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-22",
        "schedule": {
          "time": "12:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 81,
          "name": "Food Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/80/201361.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/80/201361.jpg"
        },
        "summary": "<p>In <strong>Ayesha's Homemade</strong>, Ayesha Curry is a cookbook author, super-foodie, mother of two and loving wife to NBA player Stephen Curry, with a huge following on social media. While her life can get hectic corralling her two young daughters and juggling her career and marriage, Ayesha always makes time to eat well. Food has got to be fast to make it to her family table, so join Ayesha in her home as she shares her quick and tasty recipes with family and friends.</p>",
        "updated": 1477284452,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22090"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/962941"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/962942"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/962941"
        }
      }
    }, {
      "id": 963594,
      "url": "http://www.tvmaze.com/episodes/963594/the-daytripper-8x05-boerne-tx",
      "name": "Boerne, TX",
      "season": 8,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>A tour of Boerne, Texas, stops at a vintage drive-in for \"fickle\" pickles and milkshakes. Also: a cave without a name; a nature center; and a shooting club that dates to 1864.F</p>",
      "show": {
        "id": 19620,
        "url": "http://www.tvmaze.com/shows/19620/the-daytripper",
        "name": "The Daytripper",
        "type": "Documentary",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2014-04-08",
        "schedule": {
          "time": "",
          "days": []
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 265949,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/69/173438.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/69/173438.jpg"
        },
        "summary": "<p>It's no secret that Texas is big. Alright, more than big. Texas is HUGE!! And exploring Texas ain't no small vacation, it's a lifetime endeavor. But what if you only have one day? Well that's where we come in. From the well-known landmarks to the completely obscure dives and hideaways – and all within a day's reach.</p>",
        "updated": 1477040213,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/19620"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/963594"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/963594"
        }
      }
    }, {
      "id": 963825,
      "url": "http://www.tvmaze.com/episodes/963825/give-1x05-give-to-making-connections-for-kids",
      "name": "Give to Making Connections for Kids",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "12:00",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Chef Kristen Kish visits Boston charities NEADS Dogs for Deaf and Disabled Americans and the Life Is Good Foundation.</p>",
      "show": {
        "id": 22110,
        "url": "http://www.tvmaze.com/shows/22110/give",
        "name": "Give",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "12:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 1,
          "name": "NBC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/80/201715.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/80/201715.jpg"
        },
        "summary": "<p>Small charities often make a discreet impact, changing lives without recognition for their good works. <em>\"Give\"</em> seeks to shine a light on these organizations, sending philanthropically-minded celebrities from film, television, music, sports and business to learn about their practices. Each episode a celebrity ambassador visits two charities that employ innovation and a dedication to positive change in their communities and the world, helping to spread the inspirational stories of the quiet heroes behind the scenes and their missions to make a better society.</p>",
        "updated": 1477746218,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22110"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/963825"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/969683"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/963825"
        }
      }
    }, {
      "id": 968964,
      "url": "http://www.tvmaze.com/episodes/968964/ben-10-1x06-shhh",
      "name": "Shhh!",
      "season": 1,
      "number": 6,
      "airdate": "2016-10-29",
      "airtime": "",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 11,
      "image": null,
      "summary": "",
      "show": {
        "id": 22084,
        "url": "http://www.tvmaze.com/shows/22084/ben-10",
        "name": "Ben 10",
        "type": "Animation",
        "language": "English",
        "genres": ["Action", "Adventure"],
        "status": "Running",
        "runtime": 11,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "",
          "days": []
        },
        "rating": {
          "average": null
        },
        "weight": 2,
        "network": {
          "id": 11,
          "name": "Cartoon Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 318145,
          "imdb": "tt6148376"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/80/201155.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/80/201155.jpg"
        },
        "summary": "<p>2016 reboot of the original Ben 10 cartoon series.</p>",
        "updated": 1477306074,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22084"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/968960"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/968961"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/968964"
        }
      }
    }, {
      "id": 969383,
      "url": "http://www.tvmaze.com/episodes/969383/la-banda-2x13-episodio-13",
      "name": "Episodio 13",
      "season": 2,
      "number": 13,
      "airdate": "2016-10-29",
      "airtime": "12:00",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 120,
      "image": null,
      "summary": "",
      "show": {
        "id": 7885,
        "url": "http://www.tvmaze.com/shows/7885/la-banda",
        "name": "La Banda",
        "type": "Variety",
        "language": "Spanish",
        "genres": [],
        "status": "Running",
        "runtime": 120,
        "premiered": "2015-09-13",
        "schedule": {
          "time": "20:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 226,
          "name": "Univision",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/28/72261.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/28/72261.jpg"
        },
        "summary": "<p><strong><em>\"</em></strong><strong><em>La Banda\"</em></strong> (The Band) is a new music-based, multi-media competition show in partnership with Simon Cowell. We'll scour the U.S. and Latin America for the ultimate Latino boy band. Contestants will compete for a place in \"La Banda\" and for a coveted recording contract with Sony Music Latin, home to the most prolific Latin music artists, and Syco Music, label for the world's biggest selling boy-band – One Direction. Season 2 has been confirmed!!</p>",
        "updated": 1477173348,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7885"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/969383"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/969436"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/969383"
        }
      }
    }, {
      "id": 970132,
      "url": "http://www.tvmaze.com/episodes/970132/lidias-kitchen-4x04-salt",
      "name": "Salt",
      "season": 4,
      "number": 4,
      "airdate": "2016-10-29",
      "airtime": "",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 18223,
        "url": "http://www.tvmaze.com/shows/18223/lidias-kitchen",
        "name": "Lidia's Kitchen",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "To Be Determined",
        "runtime": 30,
        "premiered": "2015-10-10",
        "schedule": {
          "time": "",
          "days": []
        },
        "rating": {
          "average": 7
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 280192,
          "imdb": "tt3698892"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/61/154080.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/61/154080.jpg"
        },
        "summary": "<p><strong><em>\"Lidia's Kitchen\"</em></strong> is the quintessential culinary masterclass with beloved \nchef, Emmy-winning TV host, and author Lidia Bastianich as your private \nchef-instructor. \nIn this comprehensive series, Lidia's passion for teaching is \nevident. She not only describes proper techniques to prepare foods of \nall kinds in classic and new Italian recipes, she guides viewers through\n the vast sea of subtle flavors, imparting tips about how to buy and \nstore ingredients.\nAfter 25 years of writing cookbooks and 18 years on public television, \nthis series is Lidia's most complete work on Italian cuisine yet. \nNourish your soul with the goodness of genuine Italian hospitality and \nfamily recipes from <em>Lidia's Kitchen</em> to yours.</p>",
        "updated": 1477219823,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/18223"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/970132"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/970133"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/970132"
        }
      }
    }, {
      "id": 972367,
      "url": "http://www.tvmaze.com/episodes/972367/the-wildlife-docs-4x05-saving-our-planets-sharks",
      "name": "Saving Our Planet's Sharks",
      "season": 4,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "12:00",
      "airstamp": "2016-10-29T12:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 12133,
        "url": "http://www.tvmaze.com/shows/12133/the-wildlife-docs",
        "name": "The Wildlife Docs",
        "type": "Documentary",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2013-10-05",
        "schedule": {
          "time": "12:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 3,
          "name": "ABC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 276614,
          "imdb": "tt3468670"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/40/101989.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/40/101989.jpg"
        },
        "summary": "<p><i><em><i><strong>The Wildlife Docs</strong></i> </em></i><i><em>takes viewers inside the work of zoological\nprofessionals -- including veterinarians, technicians and trainers -- at Busch\nGardens Tampa, as they care for thousands of exotic animals whose home is the\npopular tourist destination. The series showcases everything from preventive care to ground-breaking medical procedures, giving viewers the\nopportunity to observe what the millions of people who visit Bush Gardens each\nyear rarely get to see. The hostess of the weekly half-hour series is actress\nRachel Reenstra.</em></i></p>",
        "updated": 1477403288,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/12133"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/972367"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/972367"
        }
      }
    }, {
      "id": 905357,
      "url": "http://www.tvmaze.com/episodes/905357/formula-one-racing-2016-10-29-mexican-gp-mexico-city-fp3",
      "name": "Mexican GP, Mexico City FP3",
      "season": 2016,
      "number": 93,
      "airdate": "2016-10-29",
      "airtime": "12:30",
      "airstamp": "2016-10-29T12:30:00-04:00",
      "runtime": 120,
      "image": null,
      "summary": "<p>Mexican Grand Prix, Mexico City - Third Practice Session</p>",
      "show": {
        "id": 7180,
        "url": "http://www.tvmaze.com/shows/7180/formula-one-racing",
        "name": "Formula One Racing",
        "type": "Sports",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 120,
        "premiered": "2013-03-17",
        "schedule": {
          "time": "12:30",
          "days": ["Friday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 104,
          "name": "NBCSN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/81721.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/81721.jpg"
        },
        "summary": "<p><strong>Formula One Racing</strong> or Grand Prix Racing is a sporting event which takes place over three days \n(usually Friday to Sunday), with a series of practice and qualifying \nsessions prior to a race on Sunday. Current regulations provide for two free practice sessions on Friday,\n a morning practice session and an afternoon qualifying session held on \nSaturday, and the race held on Sunday afternoon or evening, though the \nstructure of the weekend has changed numerous times over the history of \nthe sport. At most Formula One race weekends, other events such as races in other FIA series (such as the GP2 Series) are staged.</p>",
        "updated": 1477723879,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7180"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/905356"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/905355"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/905357"
        }
      }
    }, {
      "id": 939906,
      "url": "http://www.tvmaze.com/episodes/939906/valeries-home-cooking-4x07-pumpkins-sweets-and-treats",
      "name": "Pumpkins, Sweets and Treats",
      "season": 4,
      "number": 7,
      "airdate": "2016-10-29",
      "airtime": "12:30",
      "airstamp": "2016-10-29T12:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Valerie Bertinelli is celebrating the season with her sister-in-law \nand nephew by creating a feast of fall's bounty. The autumn-themed menu \nincludes Butternut Squash and Arugula Pizza on Homemade Pizza Dough, \nMini Caramel Apples, Baked Pumpkin Doughnuts and Spiced Pumpkin Mochas. \n(Episode: VB0407H) </p>",
      "show": {
        "id": 3273,
        "url": "http://www.tvmaze.com/shows/3273/valeries-home-cooking",
        "name": "Valerie's Home Cooking",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2015-08-08",
        "schedule": {
          "time": "12:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 81,
          "name": "Food Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 50215,
          "thetvdb": 299987,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/61/154229.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/61/154229.jpg"
        },
        "summary": "<p>Valerie Bertinelli is known as a successful actress, but she is also a homegrown whiz in the kitchen. Influenced by family recipes, many passed down from one generation to the next, Valerie's cooking is modern, easy, relatable and satisfyingly delectable. Join Valerie as she shares her time-tested passion for cooking delicious meals for her friends and family on <strong>Valerie's Home Cooking</strong>.</p>",
        "updated": 1477723825,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/3273"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/939906"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/956628"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/939906"
        }
      }
    }, {
      "id": 967533,
      "url": "http://www.tvmaze.com/episodes/967533/drive-1x02-the-best-cars-with-the-letter-r",
      "name": "The Best Cars With the Letter \"R''",
      "season": 1,
      "number": 2,
      "airdate": "2016-10-29",
      "airtime": "13:00",
      "airstamp": "2016-10-29T13:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Chris, Matt and Mike charge across Britain in three of the most \nhard-core street cars available today, to see which is the loudest, the \nfastest and the best, on the road and the track.\n </p>",
      "show": {
        "id": 22209,
        "url": "http://www.tvmaze.com/shows/22209/drive",
        "name": "DRIVE",
        "type": "Sports",
        "language": "English",
        "genres": ["Drama", "Action"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-10-21",
        "schedule": {
          "time": "18:30",
          "days": ["Friday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 104,
          "name": "NBCSN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/81/203193.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/81/203193.jpg"
        },
        "summary": "<p><strong>DRIVE</strong> celebrates the culture of cars, taking our audience on the road, to the races, to the factories, to the studios—and to other places car lovers have always wanted to go, but never had the chance. We built DRIVE to be the automotive brand we've always wanted: To create hit shows no one else was making. To cultivate a relationship with our audience that mirrored the way we, as car enthusiasts, wanted to be courted. To tell the stories, go to the places, and show things no one else would show. And to make it available in ways we wanted — with access no traditional media brand could deliver. For over five years, the team that's come together to create DRIVE has lived, breathed, and loved sharing our passion for automotive with the online world. We've had many victories. Some failures. But one thing is clear: We are the children of the digital world and we know how to attract, impact and own the hearts, minds, and passion of our fans. Whether we're writing for blogs, posting in forums, sharing photos via social media, or delivering stories in video, our team gets this world like no one else.</p>",
        "updated": 1477155035,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22209"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/967533"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/967533"
        }
      }
    }, {
      "id": 905358,
      "url": "http://www.tvmaze.com/episodes/905358/formula-one-racing-2016-10-29-mexican-grand-prix-qualifying-live",
      "name": "Mexican Grand Prix, Qualifying (LIVE)",
      "season": 2016,
      "number": null,
      "airdate": "2016-10-29",
      "airtime": "14:00",
      "airstamp": "2016-10-29T14:00:00-04:00",
      "runtime": 90,
      "image": null,
      "summary": "<p>From Autodromo Hermanos Rodríguez.\n </p>",
      "show": {
        "id": 7180,
        "url": "http://www.tvmaze.com/shows/7180/formula-one-racing",
        "name": "Formula One Racing",
        "type": "Sports",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 120,
        "premiered": "2013-03-17",
        "schedule": {
          "time": "12:30",
          "days": ["Friday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 104,
          "name": "NBCSN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/81721.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/81721.jpg"
        },
        "summary": "<p><strong>Formula One Racing</strong> or Grand Prix Racing is a sporting event which takes place over three days \n(usually Friday to Sunday), with a series of practice and qualifying \nsessions prior to a race on Sunday. Current regulations provide for two free practice sessions on Friday,\n a morning practice session and an afternoon qualifying session held on \nSaturday, and the race held on Sunday afternoon or evening, though the \nstructure of the weekend has changed numerous times over the history of \nthe sport. At most Formula One race weekends, other events such as races in other FIA series (such as the GP2 Series) are staged.</p>",
        "updated": 1477723879,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7180"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/905356"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/905355"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/905358"
        }
      }
    }, {
      "id": 926975,
      "url": "http://www.tvmaze.com/episodes/926975/a-chefs-life-4x08-all-sunchoked-up",
      "name": "All Sunchoked Up",
      "season": 4,
      "number": 8,
      "airdate": "2016-10-29",
      "airtime": "14:30",
      "airstamp": "2016-10-29T14:30:00-04:00",
      "runtime": 25,
      "image": null,
      "summary": "",
      "show": {
        "id": 7518,
        "url": "http://www.tvmaze.com/shows/7518/a-chefs-life",
        "name": "A Chef's Life",
        "type": "Documentary",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 25,
        "premiered": "2013-09-12",
        "schedule": {
          "time": "14:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 9
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 38293,
          "thetvdb": 271032,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/27/69168.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/27/69168.jpg"
        },
        "summary": "<p><strong>A Chef's Life</strong> is a Peabody and Emmy award-winning docu-series that plunges audiences into the kitchen of a high-end restaurant located in the low country of eastern North Carolina. It follows the trials and travails of Chef Vivian Howard and her husband, Ben Knight, and their farm-to-table restaurant, Chef &amp; the Farmer, exploring both traditional and modern applications of quintessential Southern ingredients. Vivian's skill in the kitchen is an equal match for the charismatic personality, radiating behind her crystal grey eyes. Much more dynamic than a typical cooking show, A Chef's Life is a character-driven documentary and cooking series that premiered nationally on PBS stations in September 2013. </p>",
        "updated": 1477160385,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7518"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/926975"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/926975"
        }
      }
    }, {
      "id": 604697,
      "url": "http://www.tvmaze.com/episodes/604697/red-bull-signature-series-5x05-joyride",
      "name": "Joyride",
      "season": 5,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "15:00",
      "airstamp": "2016-10-29T15:00:00-04:00",
      "runtime": 120,
      "image": null,
      "summary": "",
      "show": {
        "id": 9214,
        "url": "http://www.tvmaze.com/shows/9214/red-bull-signature-series",
        "name": "Red Bull Signature Series",
        "type": "Sports",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 120,
        "premiered": "2012-01-21",
        "schedule": {
          "time": "15:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 1,
          "name": "NBC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 280663,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/81148.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/81148.jpg"
        },
        "summary": "<p>The <strong><em>\"Red Bull Signature Series\"</em></strong> will include the most progressive and innovative snowboarding, mountain biking, freestyle motocross, ice cross downhill, skiing and BMX events, showcased on custom courses from the inspiration of the athletes themselves.</p>",
        "updated": 1454849361,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9214"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/604697"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/604696"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/604697"
        }
      }
    }, {
      "id": 939893,
      "url": "http://www.tvmaze.com/episodes/939893/the-woodwrights-shop-36x07-saw-like-a-butterfly",
      "name": "Saw Like a Butterfly!",
      "season": 36,
      "number": 7,
      "airdate": "2016-10-29",
      "airtime": "15:00",
      "airstamp": "2016-10-29T15:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 7256,
        "url": "http://www.tvmaze.com/shows/7256/the-woodwrights-shop",
        "name": "The Woodwright's Shop",
        "type": "Scripted",
        "language": "English",
        "genres": ["DIY"],
        "status": "Running",
        "runtime": 30,
        "premiered": "1984-01-22",
        "schedule": {
          "time": "15:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 93871,
          "imdb": "tt0455291"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/26/67461.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/26/67461.jpg"
        },
        "summary": "<p>Roy Underhill has been teaching woodworking for more than 30 years. As the host of this how-to series, Roy demonstrates how to make bookcases, chairs, puzzles and toys. If it can be made out of wood, Roy knows how to do it and what tools to use. Full of tips and different techniques, <strong><em>\"The Woodwright's S</em></strong><span><span><strong><em>hop\"</em></strong> also features guest craftsmen for unique projects, all using classic hand tools.</span></span></p>",
        "updated": 1474791543,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7256"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/939893"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/939894"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/939893"
        }
      }
    }, {
      "id": 960628,
      "url": "http://www.tvmaze.com/episodes/960628/bloomberg-businessweek-1x135-episode-135",
      "name": "Episode 135",
      "season": 1,
      "number": 135,
      "airdate": "2016-10-29",
      "airtime": "15:00",
      "airstamp": "2016-10-29T15:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 11350,
        "url": "http://www.tvmaze.com/shows/11350/bloomberg-businessweek",
        "name": "Bloomberg BusinessWeek",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-01-08",
        "schedule": {
          "time": "07:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 172,
          "name": "Bloomberg TV",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/40/101660.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/40/101660.jpg"
        },
        "summary": "<p><strong>Bloomberg BusinessWeek</strong> is co-hosted by Carol Massar and David Gura who go behind the scenes of Bloomberg BusinessWeek magazine.</p>",
        "updated": 1477440308,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/11350"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/960628"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/960629"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/960628"
        }
      }
    }, {
      "id": 961002,
      "url": "http://www.tvmaze.com/episodes/961002/cnn-newsroom-with-poppy-harlow-2016-10-29-episode-98",
      "name": "Episode 98",
      "season": 2016,
      "number": 98,
      "airdate": "2016-10-29",
      "airtime": "15:00",
      "airstamp": "2016-10-29T15:00:00-04:00",
      "runtime": 120,
      "image": null,
      "summary": "",
      "show": {
        "id": 9167,
        "url": "http://www.tvmaze.com/shows/9167/cnn-newsroom-with-poppy-harlow",
        "name": "CNN Newsroom with Poppy Harlow",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 180,
        "premiered": "2006-09-03",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 40,
          "name": "CNN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/80871.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/80871.jpg"
        },
        "summary": "<p><strong>CNN Newsroom with Poppy Harlow</strong> also known as the CNN Newsroom, is an American news program on CNN/US. Broadcasting throughout the week, <i>Newsroom</i> features live and taped news reports, in addition to analysis from experts on the issues being covered, and headlines throughout each hour. The program tends to focus on softer news than their hard news primetime lineup. The program is the standard \"brand\" for general rolling-news programming for the network, originating from their headquarters in Atlanta, Georgia.</p>",
        "updated": 1477730412,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9167"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961004"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/961005"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961002"
        }
      }
    }, {
      "id": 968081,
      "url": "http://www.tvmaze.com/episodes/968081/espn-goal-line-7x09-episode-9",
      "name": "Episode 9",
      "season": 7,
      "number": 9,
      "airdate": "2016-10-29",
      "airtime": "15:00",
      "airstamp": "2016-10-29T15:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 7777,
        "url": "http://www.tvmaze.com/shows/7777/espn-goal-line",
        "name": "ESPN Goal Line",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2010-09-04",
        "schedule": {
          "time": "15:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 181,
          "name": "ESPNEWS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/28/71606.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/28/71606.jpg"
        },
        "summary": "<p>There's a place to go for college football fans to get their fix every Saturday during the season. <strong>ESPN Goal Line</strong> features unlimited live cut-ins and highlights of many of the top Saturday games, plus commentary from the network's analysts. A rotating cast includes hosts Anish Shroff and Will Selva joined by analysts Jon Ritchie, Jon Berger and Rod Gilmore.</p>",
        "updated": 1477536918,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7777"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/968081"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/968083"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/968081"
        }
      }
    }, {
      "id": 906470,
      "url": "http://www.tvmaze.com/episodes/906470/cooks-country-from-americas-test-kitchen-9x10-southern-stews",
      "name": "Southern Stews",
      "season": 9,
      "number": 10,
      "airdate": "2016-10-29",
      "airtime": "15:30",
      "airstamp": "2016-10-29T15:30:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 3850,
        "url": "http://www.tvmaze.com/shows/3850/cooks-country-from-americas-test-kitchen",
        "name": "Cook's Country from America's Test Kitchen",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2008-09-06",
        "schedule": {
          "time": "15:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 9
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 86521,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/19/48309.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/19/48309.jpg"
        },
        "summary": "<p><strong><em><i>\"Cook's Country from America's Test Kitchen</i></em></strong><i><strong><em>\"</em></strong></i> is a half-hour cooking show distributed to public television stations (reruns airing on Create) in the United States, which are also available in most Canadian markets. The show's host is <i>Cook's Illustrated</i> editor-in-chief Christopher Kimball; the show and the magazine are affiliated, and the magazine's test kitchen facility in Brookline, Massachusetts, is used as a set for the show. <i>Cook's Illustrated'</i>s parent company, Boston Common Press, while retaining its corporate name, has marketed its publishing and media activities under the <i>America's Test Kitchen</i> brand beginning in 2004.</p>",
        "updated": 1475799151,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/3850"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/906470"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/906471"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/906470"
        }
      }
    }, {
      "id": 912497,
      "url": "http://www.tvmaze.com/episodes/912497/ask-this-old-house-15x05-molding-raceway-deck-board",
      "name": "Molding Raceway, Deck Board",
      "season": 15,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "16:00",
      "airstamp": "2016-10-29T16:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 7037,
        "url": "http://www.tvmaze.com/shows/7037/ask-this-old-house",
        "name": "Ask This Old House",
        "type": "Reality",
        "language": "English",
        "genres": ["DIY"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2002-10-10",
        "schedule": {
          "time": "16:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 2657,
          "thetvdb": 74326,
          "imdb": "tt0369081"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/26/65999.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/26/65999.jpg"
        },
        "summary": "<p>The crew at This Old House take on some pretty big projects, which means they can only work on one or two houses a year. But homeowners have a virtual truckload of questions on smaller projects, and the TOH crew is ready to answer. <strong>Ask This Old House</strong> solves the steady stream of home improvement problems faced by viewers - and the crew even makes house calls!</p>",
        "updated": 1477320518,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7037"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/912497"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/933057"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/912497"
        }
      }
    }, {
      "id": 961004,
      "url": "http://www.tvmaze.com/episodes/961004/cnn-newsroom-with-poppy-harlow-2016-10-29-episode-99",
      "name": "Episode 99",
      "season": 2016,
      "number": 99,
      "airdate": "2016-10-29",
      "airtime": "17:00",
      "airstamp": "2016-10-29T17:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 9167,
        "url": "http://www.tvmaze.com/shows/9167/cnn-newsroom-with-poppy-harlow",
        "name": "CNN Newsroom with Poppy Harlow",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 180,
        "premiered": "2006-09-03",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 40,
          "name": "CNN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/80871.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/80871.jpg"
        },
        "summary": "<p><strong>CNN Newsroom with Poppy Harlow</strong> also known as the CNN Newsroom, is an American news program on CNN/US. Broadcasting throughout the week, <i>Newsroom</i> features live and taped news reports, in addition to analysis from experts on the issues being covered, and headlines throughout each hour. The program tends to focus on softer news than their hard news primetime lineup. The program is the standard \"brand\" for general rolling-news programming for the network, originating from their headquarters in Atlanta, Georgia.</p>",
        "updated": 1477730412,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9167"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961004"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/961005"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961004"
        }
      }
    }, {
      "id": 976741,
      "url": "http://www.tvmaze.com/episodes/976741/treasure-quest-dead-mans-gold-1x01-what-lies-beneath",
      "name": "What Lies Beneath",
      "season": 1,
      "number": 1,
      "airdate": "2016-10-29",
      "airtime": "17:00",
      "airstamp": "2016-10-29T17:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Featuring new interviews; Cork and his team search for clues to a vast \nfortune they believe hidden on Brazil's deadly Snake Island.\n </p>",
      "show": {
        "id": 22429,
        "url": "http://www.tvmaze.com/shows/22429/treasure-quest-dead-mans-gold",
        "name": "Treasure Quest: Dead Man's Gold",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-29",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 66,
          "name": "Discovery Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206328.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206328.jpg"
        },
        "summary": "<p><strong>Treasure Quest: Dead Man's Gold</strong> is a series that airs extended enhanced episodes with extra information, deleted scenes and bonus unseen footage from the show \"Treasure Quest\" that also airs on the Discovery Channel.</p>",
        "updated": 1477777366,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22429"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/976750"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976760"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976741"
        }
      }
    }, {
      "id": 976019,
      "url": "http://www.tvmaze.com/episodes/976019/motorsports-hour-10x11-episode-11",
      "name": "Episode 11",
      "season": 10,
      "number": 11,
      "airdate": "2016-10-29",
      "airtime": "17:30",
      "airstamp": "2016-10-29T17:30:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 9529,
        "url": "http://www.tvmaze.com/shows/9529/motorsports-hour",
        "name": "Motorsports Hour",
        "type": "Sports",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2007-06-02",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 104,
          "name": "NBCSN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/83372.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/83372.jpg"
        },
        "summary": "<p><strong>Motorsports Hour</strong> showcases off-road racing, drag boat, endurocross, dirt late model, pro-pulling, ASCS sprint car events and more from across the country.</p>",
        "updated": 1477719745,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9529"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/976019"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976020"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976019"
        }
      }
    }, {
      "id": 959606,
      "url": "http://www.tvmaze.com/episodes/959606/pbs-newshour-weekend-2016-10-29-october-29-2016",
      "name": "October 29, 2016",
      "season": 2016,
      "number": 87,
      "airdate": "2016-10-29",
      "airtime": "18:00",
      "airstamp": "2016-10-29T18:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 10564,
        "url": "http://www.tvmaze.com/shows/10564/pbs-newshour-weekend",
        "name": "PBS NewsHour Weekend",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2013-09-07",
        "schedule": {
          "time": "18:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 273048,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/35/89139.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/35/89139.jpg"
        },
        "summary": "<p>Anchor Hari Sreenivasan presents a summary of\nthe day's national and international news in a 30-minute program from the Tisch\nWNET Studios at Lincoln Center in New York. Each weekend broadcast contains\noriginal stories of national interest ranging from education and health care to\nthe economy and finance. The <strong>PBS NewsHour Weekend</strong> team also works with local stations to produce stories that may appeal to a wider,\nnational audience.</p>",
        "updated": 1477617263,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/10564"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/959606"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/959607"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/959606"
        }
      }
    }, {
      "id": 976013,
      "url": "http://www.tvmaze.com/episodes/976013/lego-ninjago-masters-of-spinjitzu-7x01-day-of-the-departed",
      "name": "Day of the Departed",
      "season": 7,
      "number": 1,
      "airdate": "2016-10-29",
      "airtime": "18:00",
      "airstamp": "2016-10-29T18:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>When Cole returns to Yang's haunted temple to seek revenge on the former\n Airjitzu Master who turned him into a ghost, he accidentally uses a \npowerful Dark Magic blade that unleashes the spectral forms of Ninjago's\n greatest villains.\n </p>",
      "show": {
        "id": 18374,
        "url": "http://www.tvmaze.com/shows/18374/lego-ninjago-masters-of-spinjitzu",
        "name": "LEGO NinjaGo: Masters of Spinjitzu",
        "type": "Animation",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2012-01-11",
        "schedule": {
          "time": "18:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 11,
          "name": "Cartoon Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 253323,
          "imdb": "tt3996972"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/62/156180.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/62/156180.jpg"
        },
        "summary": "<p>Long before time had a name, Ninjago was created by the First Spinjitzu Master by using the Four Elemental Weapons of Spinjitzu; weapons so powerful, no one can handle all of their power at once. When he passed away, his two sons swore to protect them, but the oldest, Lord Garmadon, was consumed by darkness and wanted to possess them all. A battle between brothers broke out and Lord Garmadon was struck down and banished to the Underworld. Peace returned to Ninjago as the younger brother, Sensei Wu, hid the elemental weapons in the far corners of Ninjago.</p>",
        "updated": 1477718093,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/18374"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/976013"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976013"
        }
      }
    }, {
      "id": 976750,
      "url": "http://www.tvmaze.com/episodes/976750/treasure-quest-dead-mans-gold-1x02-into-the-nightmare",
      "name": "Into the Nightmare",
      "season": 1,
      "number": 2,
      "airdate": "2016-10-29",
      "airtime": "18:00",
      "airstamp": "2016-10-29T18:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Featuring new interviews with Cork and his team; promising clues off the\n coast motivate the team to gear up; they face extreme heat, cave-ins \nand an encounter with a deadly viper.\n </p>",
      "show": {
        "id": 22429,
        "url": "http://www.tvmaze.com/shows/22429/treasure-quest-dead-mans-gold",
        "name": "Treasure Quest: Dead Man's Gold",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-29",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 66,
          "name": "Discovery Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206328.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206328.jpg"
        },
        "summary": "<p><strong>Treasure Quest: Dead Man's Gold</strong> is a series that airs extended enhanced episodes with extra information, deleted scenes and bonus unseen footage from the show \"Treasure Quest\" that also airs on the Discovery Channel.</p>",
        "updated": 1477777366,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22429"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/976750"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976760"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976750"
        }
      }
    }, {
      "id": 961005,
      "url": "http://www.tvmaze.com/episodes/961005/cnn-newsroom-with-poppy-harlow-2016-10-29-episode-100",
      "name": "Episode 100",
      "season": 2016,
      "number": 100,
      "airdate": "2016-10-29",
      "airtime": "19:00",
      "airstamp": "2016-10-29T19:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 9167,
        "url": "http://www.tvmaze.com/shows/9167/cnn-newsroom-with-poppy-harlow",
        "name": "CNN Newsroom with Poppy Harlow",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 180,
        "premiered": "2006-09-03",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 40,
          "name": "CNN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/80871.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/80871.jpg"
        },
        "summary": "<p><strong>CNN Newsroom with Poppy Harlow</strong> also known as the CNN Newsroom, is an American news program on CNN/US. Broadcasting throughout the week, <i>Newsroom</i> features live and taped news reports, in addition to analysis from experts on the issues being covered, and headlines throughout each hour. The program tends to focus on softer news than their hard news primetime lineup. The program is the standard \"brand\" for general rolling-news programming for the network, originating from their headquarters in Atlanta, Georgia.</p>",
        "updated": 1477730412,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9167"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961004"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/961005"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/961005"
        }
      }
    }, {
      "id": 968083,
      "url": "http://www.tvmaze.com/episodes/968083/espn-goal-line-7x10-episode-10",
      "name": "Episode 10",
      "season": 7,
      "number": 10,
      "airdate": "2016-10-29",
      "airtime": "19:00",
      "airstamp": "2016-10-29T19:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 7777,
        "url": "http://www.tvmaze.com/shows/7777/espn-goal-line",
        "name": "ESPN Goal Line",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2010-09-04",
        "schedule": {
          "time": "15:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 181,
          "name": "ESPNEWS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/28/71606.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/28/71606.jpg"
        },
        "summary": "<p>There's a place to go for college football fans to get their fix every Saturday during the season. <strong>ESPN Goal Line</strong> features unlimited live cut-ins and highlights of many of the top Saturday games, plus commentary from the network's analysts. A rotating cast includes hosts Anish Shroff and Will Selva joined by analysts Jon Ritchie, Jon Berger and Rod Gilmore.</p>",
        "updated": 1477536918,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7777"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/968081"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/968083"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/968083"
        }
      }
    }, {
      "id": 968086,
      "url": "http://www.tvmaze.com/episodes/968086/fox-report-weekend-2016-10-29-episode-88",
      "name": "Episode 88",
      "season": 2016,
      "number": 88,
      "airdate": "2016-10-29",
      "airtime": "19:00",
      "airstamp": "2016-10-29T19:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Host Harris Faulkner.\n </p>",
      "show": {
        "id": 9168,
        "url": "http://www.tvmaze.com/shows/9168/fox-report-weekend",
        "name": "FOX Report Weekend",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "1999-09-13",
        "schedule": {
          "time": "19:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 185,
          "name": "FOX News Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/53/133196.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/53/133196.jpg"
        },
        "summary": "<p>The <strong>FOX Report</strong> is an American evening television news program on Fox News Channel, which debuted on September 13, 1999 as a seven-night-a-week broadcast withShepard Smith as main anchor of the program until it was relegated to weekends only after the October 4, 2013 broadcast. Since 2014, the program has been anchoredby Julie Banderas on Saturdays and Harris Faulkner on Sundays. The <i>Fox Report</i> is executive produced by FNC executive producer of news, Jay Wallace. The <i>Fox Report</i> is broadcast live on Saturday and Sunday evenings at 7:00 p.m. Eastern Time, and replayed at 3:00 a.m. Eastern on both nights. On occasion, the <i>Fox Report</i> will air in place of a program that Fox News Channel normally re-airs within its late-night schedule (such as <i>Hannity</i> or <i>On the Record</i>) when said program was pre-empted in its regular evening slot due to breaking news coverage.</p>",
        "updated": 1477170955,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9168"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/968085"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/968086"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/968086"
        }
      }
    }, {
      "id": 975316,
      "url": "http://www.tvmaze.com/episodes/975316/nfl-total-access-13x283-episode-283",
      "name": "Episode 283",
      "season": 13,
      "number": 283,
      "airdate": "2016-10-29",
      "airtime": "19:00",
      "airstamp": "2016-10-29T19:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 7486,
        "url": "http://www.tvmaze.com/shows/7486/nfl-total-access",
        "name": "NFL Total Access",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2004-01-01",
        "schedule": {
          "time": "19:00",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 205,
          "name": "NFL Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/27/68872.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/27/68872.jpg"
        },
        "summary": "<p><strong>NFL Total Access</strong> is the NFL Network's flagship program churns out the day's top headlines and much more covering all 32 teams. The\nshow also provides fans with exclusive footage from inside team facilities and\ninterviews with players and coaches. Joining hosts Dan Hellie and Amber\nTheoharis with analysis and insight are a deep roster of NFL Network\npersonnel, including Warren Sapp, Willie McGinest, LaDainian Tomlinson, Kurt\nWarner, Brian Billick, Steve Mariucci and Darren Sharper, plus other former\nplayers as guest analysts throughout each week.</p>",
        "updated": 1477638516,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7486"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/975315"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/975316"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/975316"
        }
      }
    }, {
      "id": 976760,
      "url": "http://www.tvmaze.com/episodes/976760/treasure-quest-dead-mans-gold-1x03-strikes-back",
      "name": "Strikes Back",
      "season": 1,
      "number": 3,
      "airdate": "2016-10-29",
      "airtime": "19:00",
      "airstamp": "2016-10-29T19:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Featuring new interviews with Cork and his team; an exciting discovery \non the island's perimeter fires up the team; tensions rise between team \nmembers.</p>",
      "show": {
        "id": 22429,
        "url": "http://www.tvmaze.com/shows/22429/treasure-quest-dead-mans-gold",
        "name": "Treasure Quest: Dead Man's Gold",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-29",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 66,
          "name": "Discovery Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206328.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206328.jpg"
        },
        "summary": "<p><strong>Treasure Quest: Dead Man's Gold</strong> is a series that airs extended enhanced episodes with extra information, deleted scenes and bonus unseen footage from the show \"Treasure Quest\" that also airs on the Discovery Channel.</p>",
        "updated": 1477777366,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22429"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/976750"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976760"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976760"
        }
      }
    }, {
      "id": 911608,
      "url": "http://www.tvmaze.com/episodes/911608/austin-city-limits-42x06-iggy-pop",
      "name": "Iggy Pop",
      "season": 42,
      "number": 6,
      "airdate": "2016-10-29",
      "airtime": "20:00",
      "airstamp": "2016-10-29T20:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 5498,
        "url": "http://www.tvmaze.com/shows/5498/austin-city-limits",
        "name": "Austin City Limits",
        "type": "Variety",
        "language": "English",
        "genres": ["Music"],
        "status": "Running",
        "runtime": 60,
        "premiered": "2004-06-01",
        "schedule": {
          "time": "20:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 85,
          "name": "PBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 71649,
          "imdb": "tt0364784"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/22/55963.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/22/55963.jpg"
        },
        "summary": "<p><strong>Austin City Limits</strong> is an American television music program and a staple of the Public Broadcasting Service. Austin City Limits was initially created with an eye and ear toward original Texas music, featuring artists that created innovative new sounds in everything from western swing and Texas blues to Tejano music, progressive country and rock n' roll. The series went on to feature a wide range of American roots artists, covering a variety of styles and expanding beyond the borders of the Lone Star State. As the programs audience has grown, the music has encompassed regional, national and even international performers, and producer Terry Lickona continues to seek a balance of music genres in every new season. Austin City Limits today focuses on the unique contributions of diverse artists, music and songwriting from around the world.</p>",
        "updated": 1477744714,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/5498"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/911607"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/911608"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/911608"
        }
      }
    }, {
      "id": 928501,
      "url": "http://www.tvmaze.com/episodes/928501/cops-29x18-one-headlight",
      "name": "One Headlight",
      "season": 29,
      "number": 18,
      "airdate": "2016-10-29",
      "airtime": "20:00",
      "airstamp": "2016-10-29T20:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 240,
        "url": "http://www.tvmaze.com/shows/240/cops",
        "name": "Cops",
        "type": "Reality",
        "language": "English",
        "genres": ["Action", "Crime"],
        "status": "Running",
        "runtime": 30,
        "premiered": "1989-03-11",
        "schedule": {
          "time": "20:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 7.6
        },
        "weight": 0,
        "network": {
          "id": 34,
          "name": "Spike",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 3138,
          "thetvdb": 74709,
          "imdb": "tt0096563"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/1/4185.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/1/4185.jpg"
        },
        "summary": "<p><strong>Cops </strong>allows viewers to ride along with the men and women of law enforcement every week as they take on everything from domestic disputes to car chases. Created by John Langley, the ground-breaking series premiered on March 11, 1989, and has aired over 900 new episodes. The show has followed officers in 140 different cities in the United States and in Hong Kong, London, and the former Soviet Union.</p>",
        "updated": 1477140150,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/240"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/928500"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/928501"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/928501"
        }
      }
    }, {
      "id": 945570,
      "url": "http://www.tvmaze.com/episodes/945570/dr-oakley-yukon-vet-northern-disclosure-2x05-the-eagle-has-landed",
      "name": "The Eagle Has Landed",
      "season": 2,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "20:00",
      "airstamp": "2016-10-29T20:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Dr. Oakley treats animals injured during their spring migrations.\n </p>",
      "show": {
        "id": 16837,
        "url": "http://www.tvmaze.com/shows/16837/dr-oakley-yukon-vet-northern-disclosure",
        "name": "Dr. Oakley, Yukon Vet: Northern Disclosure",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-04-02",
        "schedule": {
          "time": "20:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 83,
          "name": "National Geographic WILD",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 51794,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/56/140939.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/56/140939.jpg"
        },
        "summary": "<p><strong>Dr. Oakley: Yukon Vet: Northern Disclosure </strong>is a series that airs Extended Enhanced Episodes with extra information and unseen footage from the show \"Dr. Oakley: Yukon Vet\" that also airs on National Geographic Wild.</p>",
        "updated": 1477722639,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/16837"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/945569"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/945570"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/945570"
        }
      }
    }, {
      "id": 967160,
      "url": "http://www.tvmaze.com/episodes/967160/golf-central-2016-10-29-episode-283",
      "name": "Episode 283",
      "season": 2016,
      "number": 283,
      "airdate": "2016-10-29",
      "airtime": "20:00",
      "airstamp": "2016-10-29T20:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 9281,
        "url": "http://www.tvmaze.com/shows/9281/golf-central",
        "name": "Golf Central",
        "type": "News",
        "language": "English",
        "genres": ["Sports"],
        "status": "Running",
        "runtime": 60,
        "premiered": "2006-05-04",
        "schedule": {
          "time": "18:00",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 188,
          "name": "Golf Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/42/106657.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/42/106657.jpg"
        },
        "summary": "<p>Keep up with everything that's happening in the world of golf with Golf Central, the game's only live, daily news source. More than just scores, <strong>Golf Central</strong> delivers in depth analysis, breaking news, and unforgettable highlights. If it happens in golf, it happens on Golf Central.</p>",
        "updated": 1477179391,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9281"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/967159"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/967160"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/967160"
        }
      }
    }, {
      "id": 976768,
      "url": "http://www.tvmaze.com/episodes/976768/treasure-quest-dead-mans-gold-1x04-heart-of-darkness",
      "name": "Heart of Darkness",
      "season": 1,
      "number": 4,
      "airdate": "2016-10-29",
      "airtime": "20:00",
      "airstamp": "2016-10-29T20:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Featuring interviews with Cork and his team; a trail of clues gives the \nteam new hope, but also leads to a dangerous confrontation on the \nisland.\n </p>",
      "show": {
        "id": 22429,
        "url": "http://www.tvmaze.com/shows/22429/treasure-quest-dead-mans-gold",
        "name": "Treasure Quest: Dead Man's Gold",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-29",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 66,
          "name": "Discovery Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206328.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206328.jpg"
        },
        "summary": "<p><strong>Treasure Quest: Dead Man's Gold</strong> is a series that airs extended enhanced episodes with extra information, deleted scenes and bonus unseen footage from the show \"Treasure Quest\" that also airs on the Discovery Channel.</p>",
        "updated": 1477777366,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22429"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/976750"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976760"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976768"
        }
      }
    }, {
      "id": 976774,
      "url": "http://www.tvmaze.com/episodes/976774/my-cat-from-hell-worst-cat-astrophes-1x01-frightening-felines",
      "name": "Frightening Felines",
      "season": 1,
      "number": 1,
      "airdate": "2016-10-29",
      "airtime": "20:00",
      "airstamp": "2016-10-29T20:00:00-04:00",
      "runtime": 120,
      "image": null,
      "summary": "<p>New resident Penny terrorizes Puck, a sweet senior cat, resulting in \nbloodshed every time; a family's cat gets so out of control they have to\n call 911.\n </p>",
      "show": {
        "id": 22430,
        "url": "http://www.tvmaze.com/shows/22430/my-cat-from-hell-worst-cat-astrophes",
        "name": "My Cat from Hell: Worst Cat-astrophes",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 120,
        "premiered": "2016-10-29",
        "schedule": {
          "time": "20:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 92,
          "name": "Animal Planet",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206331.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206331.jpg"
        },
        "summary": "<p><strong>My Cat from Hell: Worst Cat-astrophes</strong> is a series that airs extended enhanced episodes with extra information, deleted scenes and bonus unseen footage from the show \"My Cat From Hell\" that also airs on Animal Planet.</p>",
        "updated": 1477761806,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22430"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976774"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976774"
        }
      }
    }, {
      "id": 817577,
      "url": "http://www.tvmaze.com/episodes/817577/dirk-gentlys-holistic-detective-agency-1x02-lost-found",
      "name": "Lost & Found",
      "season": 1,
      "number": 2,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Todd is drawn further into the case as they learn more about the fiends who captured Patrick Spring's daughter, Lydia. Mysterious characters take a step closer to a collision, culminating in an absurd hostage exchange, wherein corgi is tossed off a high bridge and a determined woman enters Dirk and Todd's life.</p>",
      "show": {
        "id": 11405,
        "url": "http://www.tvmaze.com/shows/11405/dirk-gentlys-holistic-detective-agency",
        "name": "Dirk Gently's Holistic Detective Agency",
        "type": "Scripted",
        "language": "English",
        "genres": ["Comedy", "Science-Fiction", "Mystery"],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-22",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 9
        },
        "weight": 54,
        "network": {
          "id": 15,
          "name": "BBC America",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": {
          "id": 1,
          "name": "Netflix",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "externals": {
          "tvrage": null,
          "thetvdb": 312505,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/79/199481.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/79/199481.jpg"
        },
        "summary": "<p>Corpses—cops—trap—cult—assassins—Pararibulitis—vampires—lottery ticket—kitten—corgi—EVERYTHING IS CONNECTED! Welcome to the world of <strong>Dirk Gently's Holistic Detective Agency</strong>; a trippy mystery that thrusts a reluctant sidekick into the bizarre world of an unconventional detective who believes in the interconnectedness of all things. When washed-up rocker Todd Brotzman stumbles upon the murder scene of a millionaire, all hell breaks loose. Eccentric detective, Dirk Gently, wholly believes they're destined to untangle the peculiar events surrounding the mystery together, whether Todd likes it or not! A collection of wild and dangerous characters' further infiltrate and complicate their world, each episode landing them a few random steps closer to uncovering the truth.</p><p>The series is an adaptation of the wildly popular novels by Douglas Adams.</p>",
        "updated": 1477759987,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/11405"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/817554"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/817577"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/817577"
        }
      }
    }, {
      "id": 929481,
      "url": "http://www.tvmaze.com/episodes/929481/jail-5x12-episode-12",
      "name": "Episode 12",
      "season": 5,
      "number": 12,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 2645,
        "url": "http://www.tvmaze.com/shows/2645/jail",
        "name": "Jail",
        "type": "Reality",
        "language": "English",
        "genres": ["Drama", "Crime"],
        "status": "Running",
        "runtime": 30,
        "premiered": "2007-09-04",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 34,
          "name": "Spike",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 17307,
          "thetvdb": 83051,
          "imdb": "tt1128727"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/67/167821.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/67/167821.jpg"
        },
        "summary": "<p>Shot on location in cities across the U.S., <strong>Jail</strong> renamed <strong>Jail: Big Texas</strong> follows prison inmates from their initial booking through their first moments behind bars. Each episode captures the harsh and sometimes humorous reality of what happens to criminals after they're caught.</p>",
        "updated": 1477431795,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/2645"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/929480"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/929481"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/929481"
        }
      }
    }, {
      "id": 936154,
      "url": "http://www.tvmaze.com/episodes/936154/iyanla-fix-my-life-6x08-house-of-healing-fix-a-black-mans-heart-part-1",
      "name": "House of Healing: Fix a Black Man's Heart, Part 1",
      "season": 6,
      "number": 8,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 3841,
        "url": "http://www.tvmaze.com/shows/3841/iyanla-fix-my-life",
        "name": "Iyanla, Fix My Life",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2012-06-02",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 236,
          "name": "Oprah Winfrey Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 268633,
          "imdb": "tt2346273"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/19/48291.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/19/48291.jpg"
        },
        "summary": "<p><strong>Iyanla: Fix My Life</strong> is the reality show you have never seen before. Iyanla Vanzant, accomplished author, inspirational speaker, talk show host and living testament to the value in life's valleys and the power of acting on faith, goes behind closed doors and deep inside people's lives for emotional, rivetingconversations.<br /><br />Iyanla has had a unique life filled with many personal struggles, which she has overcome and used to become stronger. Now, she's back, helping people fix their lives, using her past to help others' futures. Secrets will be revealed, truths will be uncovered and emotions will come out as Iyanla teaches us how topull back the curtain on what is broken in our lives.</p>",
        "updated": 1477377048,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/3841"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/936153"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/936154"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/936154"
        }
      }
    }, {
      "id": 936203,
      "url": "http://www.tvmaze.com/episodes/936203/ghost-adventures-13x06-route-666-halloween-special-2016",
      "name": "Route 666 (Halloween Special 2016)",
      "season": 13,
      "number": 6,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>In this two-hour Halloween \nevent, the Ghost Adventure crew travels across Texas on a personal Route\n 666. First they investigate the De Soto Hotel and Concordia Cemetery, \nboth known for Satan worship. Then they head to Goatman's Bridge where a\n demon has attacked three women. </p>",
      "show": {
        "id": 926,
        "url": "http://www.tvmaze.com/shows/926/ghost-adventures",
        "name": "Ghost Adventures",
        "type": "Documentary",
        "language": "English",
        "genres": ["Adventure", "Horror"],
        "status": "Running",
        "runtime": 60,
        "premiered": "2008-10-17",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 7.9
        },
        "weight": 2,
        "network": {
          "id": 82,
          "name": "Travel Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 20338,
          "thetvdb": 83929,
          "imdb": "tt1319900"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/6/16166.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/6/16166.jpg"
        },
        "summary": "<p>Are you ready for the lockdown?<br /><br /><strong>Ghost Adventures</strong> crew -- Zak Bagans, Aaron Goodwin, Billy Tolley, and Jay Wasley -- is back to investigate the scariest, most notorious, haunted places in the world.<br /><br /> The trio will interview eyewitnesses and historians at each location, arming themselves with the stories of the ghosts they will later provoke and confront during their dusk-to-dawn lockdowns. (Note: They don't always come out unscathed!) Then they'll review and analyze their findings with some the most respected experts and specialists in the paranormal field.</p>",
        "updated": 1477770057,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/926"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/936202"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/936203"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/936203"
        }
      }
    }, {
      "id": 943323,
      "url": "http://www.tvmaze.com/episodes/943323/downtown-shabby-1x03-bungalow-beauty-gets-fantasy-facelift",
      "name": "Bungalow Beauty Gets Fantasy Facelift",
      "season": 1,
      "number": 3,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 21571,
        "url": "http://www.tvmaze.com/shows/21571/downtown-shabby",
        "name": "Downtown Shabby",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-15",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 125,
          "name": "fyi,",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/78/196687.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/78/196687.jpg"
        },
        "summary": "<p>Across America, there are thousands of older homes that look like the perfect dream house on the outside, but are practically unlivable on the inside. These beautiful vintage homes hide dark secrets from dry rot, to weak foundations, to cramped design or even termite infestations. In <strong>Downtown Shabby</strong><em>,</em> renovation and design experts Frank and Sherry Fontana, will take these homes and renovate, remodel and ultimately revive them into modern masterpieces.</p>",
        "updated": 1477431696,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/21571"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/943322"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/943323"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/943323"
        }
      }
    }, {
      "id": 945565,
      "url": "http://www.tvmaze.com/episodes/945565/dr-oakley-yukon-vet-4x05-no-bull",
      "name": "No Bull",
      "season": 4,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Dr. Oakley travels to Prince Edward to deal with the inbreeding problem among American bison.\n </p>",
      "show": {
        "id": 592,
        "url": "http://www.tvmaze.com/shows/592/dr-oakley-yukon-vet",
        "name": "Dr. Oakley, Yukon Vet",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2014-04-12",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 83,
          "name": "National Geographic WILD",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 41352,
          "thetvdb": 289688,
          "imdb": "tt3593456"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/4/11953.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/4/11953.jpg"
        },
        "summary": "<p>In the frozen Yukon Territory in Northern Canada, you've got to be hearty and tough. You've got to expect solitude across frigid, remote landscapes with freezing temperatures, but even in the desolate wilderness you need a vet to help your ailing wiener dog. Enter <strong>Dr. Oakley, Yukon Vet</strong>, that follows the experienced Dr. Michelle Oakley, veterinarian, as she makes house calls across thousands of square miles in the Yukon 3/4 helping many species of animals, including an angry muskox, a caribou with a tumor, a defensive mama lynx, and a grey owl with an amputated wing. Accompanied by her teenage daughters and armed with humor as sharp as a scalpel, Dr. Oakley deftly juggles being a full-time veterinarian, wife and mom while taking us into the isolated regions of the Yukon.</p>",
        "updated": 1477722735,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/592"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/945564"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/945565"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/945565"
        }
      }
    }, {
      "id": 958688,
      "url": "http://www.tvmaze.com/episodes/958688/untold-stories-of-the-er-12x05-doctors-dilemma",
      "name": "Doctor's Dilemma",
      "season": 12,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>A young pregnant woman in labor begs the ER doctor to keep her pregnancy\n a secret from her father; twins share confusing symptoms; a man with no\n pulse or blood pressure is still alive and breathing.\n </p>",
      "show": {
        "id": 4009,
        "url": "http://www.tvmaze.com/shows/4009/untold-stories-of-the-er",
        "name": "Untold Stories of the E.R.",
        "type": "Documentary",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2005-04-04",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 80,
          "name": "TLC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 6960,
          "thetvdb": 78869,
          "imdb": "tt0437043"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/19/49319.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/19/49319.jpg"
        },
        "summary": "<p><strong>Untold Stories of the E.R.</strong> is an inside look at some the craziest stories and cases to enter an emergency room.</p>",
        "updated": 1477721745,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/4009"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/958687"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/958688"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/958688"
        }
      }
    }, {
      "id": 963445,
      "url": "http://www.tvmaze.com/episodes/963445/first-time-flippers-3x06-stilts-and-stones-may-break-the-budget",
      "name": "Stilts and Stones May Break the Budget",
      "season": 3,
      "number": 6,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "<p>Husband and wife flipping team, Christine and Greg, decide to flip an \nenormous house by the beach in southern New Jersey. The flip starts to \nspiral out of control when Christine's expensive taste interferes with \nGreg's strict budget.</p>",
      "show": {
        "id": 12014,
        "url": "http://www.tvmaze.com/shows/12014/first-time-flippers",
        "name": "First Time Flippers",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2013-06-22",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 90,
          "name": "DIY Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 297205,
          "imdb": "tt3104722"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/40/100826.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/40/100826.jpg"
        },
        "summary": "<p>Can two <strong>First Time Flippers</strong> turn\na disaster house into a dream home? We chronicle the highs and lows of\nrenovation as homeowners take on their very first flip. Will they make a\nprofit? Or break the bank?</p>",
        "updated": 1477722329,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/12014"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/939902"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/963445"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/963445"
        }
      }
    }, {
      "id": 968385,
      "url": "http://www.tvmaze.com/episodes/968385/in-other-news-1x03-shrouded-by-the-singer",
      "name": "Shrouded by the Singer",
      "season": 1,
      "number": 3,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>On June 25, 2009, on the same day Michael Jackson's death dominates the \nheadlines, Farrah Fawcett dies, a governor's scandal gets revealed, and a\n highly-debated climate bill goes to a vote.\n </p>",
      "show": {
        "id": 22242,
        "url": "http://www.tvmaze.com/shows/22242/in-other-news",
        "name": "In Other News",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-15",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 201,
          "name": "MSNBC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": "tt4703118"
        },
        "image": null,
        "summary": "<p><strong>In Other News</strong> transports us back to a moment in history when a major news story dominated coverage and cast a shadow over events that would have been front page news on any other day. The second episode explores what else happened as the 2000 Presidential Election hung in the balance. </p>",
        "updated": 1477138415,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22242"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/968383"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/968385"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/968385"
        }
      }
    }, {
      "id": 969554,
      "url": "http://www.tvmaze.com/episodes/969554/justice-with-judge-jeanine-6x49-episode-49",
      "name": "Episode 49",
      "season": 6,
      "number": 49,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 2341,
        "url": "http://www.tvmaze.com/shows/2341/justice-with-judge-jeanine",
        "name": "Justice with Judge Jeanine",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2011-01-15",
        "schedule": {
          "time": "21:00",
          "days": ["Saturday", "Sunday"]
        },
        "rating": {
          "average": 1
        },
        "weight": 0,
        "network": {
          "id": 185,
          "name": "FOX News Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 48203,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/80896.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/80896.jpg"
        },
        "summary": "<p><em><strong>\"Justice with Judge Jeanine\"</strong></em>, a weekend prime-time program (Saturday, 9 p.m. ET) that presents Jeanine Pirro's legal insights on the news of the week, current high profile cases, as well as recent issues and trends in the world of crime and justice.</p>",
        "updated": 1477175321,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/2341"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/969553"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/969554"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/969554"
        }
      }
    }, {
      "id": 976770,
      "url": "http://www.tvmaze.com/episodes/976770/treasure-quest-dead-mans-gold-1x05-no-exit",
      "name": "No Exit",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "21:00",
      "airstamp": "2016-10-29T21:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Featuring interviews with Cork and his team; a dangerous run-in leads \nthe team to a new clue, but a breakdown in communication leaves them in \nthe dark about an approaching storm.\n </p>",
      "show": {
        "id": 22429,
        "url": "http://www.tvmaze.com/shows/22429/treasure-quest-dead-mans-gold",
        "name": "Treasure Quest: Dead Man's Gold",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-29",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 66,
          "name": "Discovery Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206328.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206328.jpg"
        },
        "summary": "<p><strong>Treasure Quest: Dead Man's Gold</strong> is a series that airs extended enhanced episodes with extra information, deleted scenes and bonus unseen footage from the show \"Treasure Quest\" that also airs on the Discovery Channel.</p>",
        "updated": 1477777366,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22429"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/976750"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976760"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976770"
        }
      }
    }, {
      "id": 886632,
      "url": "http://www.tvmaze.com/episodes/886632/the-greg-gutfeld-show-2016-10-29-episode-40",
      "name": "Episode 40",
      "season": 2016,
      "number": 40,
      "airdate": "2016-10-29",
      "airtime": "22:00",
      "airstamp": "2016-10-29T22:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 2282,
        "url": "http://www.tvmaze.com/shows/2282/the-greg-gutfeld-show",
        "name": "The Greg Gutfeld Show",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2015-05-31",
        "schedule": {
          "time": "22:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 9
        },
        "weight": 0,
        "network": {
          "id": 185,
          "name": "FOX News Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 49352,
          "thetvdb": 296539,
          "imdb": "tt4690816"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/12/31526.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/12/31526.jpg"
        },
        "summary": "<p>Greg Gutfeld will host the new FOX News Channel program <strong>The Greg Gutfield Show</strong>. This new show will include parodies of current events and feature interviews with newsmakers, media personalities and culture critics.</p>",
        "updated": 1477722422,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/2282"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/886631"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/886632"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/886632"
        }
      }
    }, {
      "id": 935224,
      "url": "http://www.tvmaze.com/episodes/935224/oprah-where-are-they-now-8x11-former-teen-pop-star-debbie-gibson-jennifer-holliday-sally-jessy-raphael",
      "name": "Former Teen Pop Star Debbie Gibson, Jennifer Holliday & Sally Jessy Raphael",
      "season": 8,
      "number": 11,
      "airdate": "2016-10-29",
      "airtime": "22:00",
      "airstamp": "2016-10-29T22:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 3842,
        "url": "http://www.tvmaze.com/shows/3842/oprah-where-are-they-now",
        "name": "Oprah: Where Are They Now?",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2012-10-02",
        "schedule": {
          "time": "22:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 236,
          "name": "Oprah Winfrey Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 32922,
          "thetvdb": 283057,
          "imdb": "tt2466672"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/19/48293.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/19/48293.jpg"
        },
        "summary": "<p><strong>Oprah: Where Are They Now?</strong> is an American reality television series on the Oprah Winfrey Network that takes a look back at what happened to some of the biggest headline makers on The Oprah Winfrey Show plus updates on their current life.</p>",
        "updated": 1477139342,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/3842"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/931539"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/935224"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/935224"
        }
      }
    }, {
      "id": 941986,
      "url": "http://www.tvmaze.com/episodes/941986/life-at-vet-u-1x05-critical-care",
      "name": "Critical Care",
      "season": 1,
      "number": 5,
      "airdate": "2016-10-29",
      "airtime": "22:00",
      "airstamp": "2016-10-29T22:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 20886,
        "url": "http://www.tvmaze.com/shows/20886/life-at-vet-u",
        "name": "Life at Vet U",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-01",
        "schedule": {
          "time": "22:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 92,
          "name": "Animal Planet",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/76/192044.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/76/192044.jpg"
        },
        "summary": "<p>In <strong>Life at Vet U</strong>, Animal Planet takes viewers behind the scenes of the University of Pennsylvania School of Veterinary Medicine (Penn Vet) as six students embark on a journey to graduation - a culmination of four intense, but rewarding, years of never-ending studying, round-the-clock rotations and unpredictable cases. </p><p>Penn Vet is equipped with some of the most advanced technology in the industry and sees nearly 40,000 patients a year at its two teaching hospitals: Ryan Hospital for companion animals and New Bolton Center hospital for large animals. From dogs and cats, to horses, cows and zebras, the students are constantly challenged to be prepared for anything - whether it be spaying and neutering, births, surgeries or routine checkups.</p>",
        "updated": 1477197436,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/20886"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/941985"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/941986"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/941986"
        }
      }
    }, {
      "id": 953390,
      "url": "http://www.tvmaze.com/episodes/953390/ancient-assassins-2x04-romes-navy-seals",
      "name": "Rome's Navy Seals",
      "season": 2,
      "number": 4,
      "airdate": "2016-10-29",
      "airtime": "22:00",
      "airstamp": "2016-10-29T22:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Batavians, an amphibious Roman unit, lead the invasion of ancient \nBritain in a desperate mission deep in enemy territory that may hand the\n emperor an unlikely victory.\n </p>",
      "show": {
        "id": 4101,
        "url": "http://www.tvmaze.com/shows/4101/ancient-assassins",
        "name": "Ancient Assassins",
        "type": "Documentary",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2014-10-03",
        "schedule": {
          "time": "22:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 1,
        "network": {
          "id": 229,
          "name": "AHC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 286652,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/84802.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/84802.jpg"
        },
        "summary": "<p><strong>Ancient Assassins</strong> on AHC features elite men from a wide swath of history who were trained to perfection, skilled with a devastating array of weaponry.</p>",
        "updated": 1477722198,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/4101"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/953389"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/953390"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/953390"
        }
      }
    }, {
      "id": 967457,
      "url": "http://www.tvmaze.com/episodes/967457/true-nightmares-2x04-my-beloved-smother",
      "name": "My Beloved Smother",
      "season": 2,
      "number": 4,
      "airdate": "2016-10-29",
      "airtime": "22:00",
      "airstamp": "2016-10-29T22:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 4019,
        "url": "http://www.tvmaze.com/shows/4019/true-nightmares",
        "name": "True Nightmares",
        "type": "Documentary",
        "language": "English",
        "genres": ["Drama", "Action", "Crime", "Thriller", "Mystery"],
        "status": "Running",
        "runtime": 60,
        "premiered": "2015-10-14",
        "schedule": {
          "time": "22:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 7,
        "network": {
          "id": 89,
          "name": "Investigation Discovery",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 302009,
          "imdb": "tt5043530"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/81664.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/81664.jpg"
        },
        "summary": "<p>True stories of murder and mayhem morph into urban legends like the \nboogeyman or the monster under the bed – haunting our childhoods and \nscaring us throughout our lives. Investigation Discovery's (ID) upcoming\n series <strong>True Nightmares</strong> brings to life the true stories that spawned these hair-raising tales, proving once again that truth will <em>always</em>\n be scarier than fiction. Performer Todd Robbins, best known for his \nfascination with eccentric and arcane forms of entertainment, brings his\n shadowy and sardonic self to deliver six spine-tingling episodes, \nrevealing that sometimes, our fears aren't mere figments of our \nimagination after all. Acting as an on-screen narrator, Robbins appears \nin and out of scenes, using his ominous tone and eerie charisma to \nmasterfully weave together three stories each hour, playfully hinting \nthat there is always more to the story to reveal. </p>",
        "updated": 1477318653,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/4019"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/957906"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/967457"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/967457"
        }
      }
    }, {
      "id": 968276,
      "url": "http://www.tvmaze.com/episodes/968276/48-hours-29x06-bad-boy",
      "name": "Bad Boy",
      "season": 29,
      "number": 6,
      "airdate": "2016-10-29",
      "airtime": "22:00",
      "airstamp": "2016-10-29T22:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>The case of Shelley Mook, a young mother and Tennessee school teacher \nwho mysteriously vanished after visiting her ex-husband, is examined.</p>",
      "show": {
        "id": 4408,
        "url": "http://www.tvmaze.com/shows/4408/48-hours",
        "name": "48 Hours",
        "type": "News",
        "language": "English",
        "genres": ["Crime", "Mystery"],
        "status": "Running",
        "runtime": 60,
        "premiered": "1998-04-30",
        "schedule": {
          "time": "22:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": 7
        },
        "weight": 1,
        "network": {
          "id": 2,
          "name": "CBS",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 138551,
          "imdb": "tt0271894"
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/24/62177.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/24/62177.jpg"
        },
        "summary": "<p><strong>48 Hours</strong> is a CBS news magazine that investigates intriguing crime and justice cases that touch on all aspects of the human experience. Over its long run, the show has helped exonerate wrongly convicted people, driven the reopening -- and resolution -- of cold cases, and changed numerous lives. CBS News correspondents offer an in-depth look into each story, with the emphasis on solving the mystery at its heart. The program and its team have earned critical acclaim, including 20 Emmys and three Peabody Awards.</p>",
        "updated": 1477720160,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/4408"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961016"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/968276"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/968276"
        }
      }
    }, {
      "id": 969689,
      "url": "http://www.tvmaze.com/episodes/969689/from-the-bottom-up-2x01-tba",
      "name": "TBA",
      "season": 2,
      "number": 1,
      "airdate": "2016-10-29",
      "airtime": "22:00",
      "airstamp": "2016-10-29T22:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 11487,
        "url": "http://www.tvmaze.com/shows/11487/from-the-bottom-up",
        "name": "From the Bottom Up",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 30,
        "premiered": "2016-01-16",
        "schedule": {
          "time": "22:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 58,
          "name": "Centric",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 305886,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/39/98697.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/39/98697.jpg"
        },
        "summary": "<p><strong>From the Bottom Up</strong> is a six-part docu-series that follows the journey of five women, after falling from grace, as they try to make the necessary changes to turn their lives around and find redemption for themselves and their families. The series provides an unfettered view into their world and the organic chaos within their individual lives. The series tackles real, raw, gritty, emotional and honest issues from women who are smiling on the outside, but two minutes from dying on the inside. It's not what you have, but what you do with what you have that matters! </p>",
        "updated": 1477191686,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/11487"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/623239"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/969689"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/969689"
        }
      }
    }, {
      "id": 976772,
      "url": "http://www.tvmaze.com/episodes/976772/treasure-quest-dead-mans-gold-1x06-fortunes-doorstep",
      "name": "Fortune's Doorstep",
      "season": 1,
      "number": 6,
      "airdate": "2016-10-29",
      "airtime": "22:00",
      "airstamp": "2016-10-29T22:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Featuring interviews with Cork and his team; looming storms and a leaky \nboat threaten to shut down the mission just as Cork closes in on the \nTreasure of the Trinity.\n </p>",
      "show": {
        "id": 22429,
        "url": "http://www.tvmaze.com/shows/22429/treasure-quest-dead-mans-gold",
        "name": "Treasure Quest: Dead Man's Gold",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-29",
        "schedule": {
          "time": "17:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 66,
          "name": "Discovery Channel",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/82/206328.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/82/206328.jpg"
        },
        "summary": "<p><strong>Treasure Quest: Dead Man's Gold</strong> is a series that airs extended enhanced episodes with extra information, deleted scenes and bonus unseen footage from the show \"Treasure Quest\" that also airs on the Discovery Channel.</p>",
        "updated": 1477777366,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/22429"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/976750"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976760"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976772"
        }
      }
    }, {
      "id": 976026,
      "url": "http://www.tvmaze.com/episodes/976026/life-at-vet-u-extra-credit-1x04-emergency-c-section",
      "name": "Emergency C-Section",
      "season": 1,
      "number": 4,
      "airdate": "2016-10-29",
      "airtime": "23:00",
      "airstamp": "2016-10-29T23:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "<p>Going behind the scenes with insider facts and extended scenes; the \npressure mounts as the students begin their last month as students; \nresponsibilities increase and the students must answer the call to step \nup more than ever.\n </p>",
      "show": {
        "id": 21833,
        "url": "http://www.tvmaze.com/shows/21833/life-at-vet-u-extra-credit",
        "name": "Life at Vet U: Extra Credit",
        "type": "Reality",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-10-08",
        "schedule": {
          "time": "23:00",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 92,
          "name": "Animal Planet",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/78/196688.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/78/196688.jpg"
        },
        "summary": "<p><strong>Life at Vet U: Extra Credit</strong> is a series that airs extended enhanced episodes with extra information, deleted scenes and bonus unseen footage from the show <em>Life at Vet U</em> that also airs on <em>Animal Planet</em>.</p>",
        "updated": 1477723062,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/21833"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961017"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976026"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976026"
        }
      }
    }, {
      "id": 976028,
      "url": "http://www.tvmaze.com/episodes/976028/premier-league-match-of-the-day-5x12-episode-12",
      "name": "Episode 12",
      "season": 5,
      "number": 12,
      "airdate": "2016-10-29",
      "airtime": "23:00",
      "airstamp": "2016-10-29T23:00:00-04:00",
      "runtime": 120,
      "image": null,
      "summary": "",
      "show": {
        "id": 7796,
        "url": "http://www.tvmaze.com/shows/7796/premier-league-match-of-the-day",
        "name": "Premier League Match of the Day",
        "type": "Sports",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2013-09-21",
        "schedule": {
          "time": "00:30",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 104,
          "name": "NBCSN",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/32/81152.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/32/81152.jpg"
        },
        "summary": "<p>Modeled after the longtime, highly regarded BBC show of the same name, <strong>Premier League Match of the Day</strong> presents an extended highlights rundown -- all of it by way of the original announcer calls from the game broadcasts -- of every Premiere League match from Saturday, plus post-match interviews and reactions. Rebecca Lowe, who covered soccer for the BBC and ESPN prior to joining NBC Sports, hosts the show, with analysis presented by former Jamaican national team player Robbie Earle and former English footballer Robbie Mustoe, and contributions by legendary U.K. striker Gary Lineker and Daily Mail columnist Neil Ashton.</p>",
        "updated": 1477723296,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7796"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/961649"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/976028"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/976028"
        }
      }
    }, {
      "id": 968310,
      "url": "http://www.tvmaze.com/episodes/968310/bloomberg-markets-middle-east-1x129-episode-129",
      "name": "Episode 129",
      "season": 1,
      "number": 129,
      "airdate": "2016-10-29",
      "airtime": "00:00",
      "airstamp": "2016-10-30T00:00:00-04:00",
      "runtime": 60,
      "image": null,
      "summary": "",
      "show": {
        "id": 16667,
        "url": "http://www.tvmaze.com/shows/16667/bloomberg-markets-middle-east",
        "name": "Bloomberg Markets: Middle East",
        "type": "News",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-05-01",
        "schedule": {
          "time": "00:00",
          "days": ["Monday", "Tuesday", "Wednesday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 172,
          "name": "Bloomberg TV",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": 52118,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/57/143319.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/57/143319.jpg"
        },
        "summary": "<p><strong>Bloomberg Markets: Middle East</strong> is hosted by Marcus Cranny, who interviews newsmakers and he reports on market-moving stories in the Middle East!</p>",
        "updated": 1477139599,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/16667"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/968309"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/968310"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/968310"
        }
      }
    }, {
      "id": 968329,
      "url": "http://www.tvmaze.com/episodes/968329/college-football-final-18x09-episode-9",
      "name": "Episode 9",
      "season": 18,
      "number": 9,
      "airdate": "2016-10-29",
      "airtime": "01:45",
      "airstamp": "2016-10-30T01:45:00-04:00",
      "runtime": 75,
      "image": null,
      "summary": "",
      "show": {
        "id": 9548,
        "url": "http://www.tvmaze.com/shows/9548/college-football-final",
        "name": "College Football Final",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "1999-08-28",
        "schedule": {
          "time": "01:30",
          "days": ["Saturday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 180,
          "name": "ESPN2",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": 276068,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/83483.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/83483.jpg"
        },
        "summary": "<p><strong>College Football Final</strong> is a one hour program totally devoted to college football and airs every Saturday night during the college football season. It was previously named College Gameday Final until 2006. It is seen at 12am ET on ESPN and lasts until 1am ET and the program re-airs at 7:30 or 8:00 am the next morning. It is similar to ESPN's Baseball Tonight, NBA Fastbreak, NFL Live, and College GameNight, except that it only appears once a week. The program breaks down the days' games with highlights of all the biggest games, analysis of the big stories and a look ahead to next weeks match ups. The program is presented in high definition on ESPN HD, except for the on site reports.</p>",
        "updated": 1477529215,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/9548"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/968328"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/968329"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/968329"
        }
      }
    }, {
      "id": 966060,
      "url": "http://www.tvmaze.com/episodes/966060/inside-college-football-6x67-episode-67",
      "name": "Episode 67",
      "season": 6,
      "number": 67,
      "airdate": "2016-10-29",
      "airtime": "02:00",
      "airstamp": "2016-10-30T02:00:00-04:00",
      "runtime": 30,
      "image": null,
      "summary": "",
      "show": {
        "id": 7543,
        "url": "http://www.tvmaze.com/shows/7543/inside-college-football",
        "name": "Inside College Football",
        "type": "Talk Show",
        "language": "English",
        "genres": [],
        "status": "Running",
        "runtime": 60,
        "premiered": "2011-10-01",
        "schedule": {
          "time": "19:00",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        "rating": {
          "average": null
        },
        "weight": 0,
        "network": {
          "id": 272,
          "name": "CBS Sports Network",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          }
        },
        "webChannel": null,
        "externals": {
          "tvrage": null,
          "thetvdb": null,
          "imdb": null
        },
        "image": {
          "medium": "http://tvmazecdn.com/uploads/images/medium_portrait/33/83482.jpg",
          "original": "http://tvmazecdn.com/uploads/images/original_untouched/33/83482.jpg"
        },
        "summary": "<p><strong><em>\"</em></strong><strong><em>Inside College Football\"</em></strong> previews the upcoming weekend's college football match-ups.</p>",
        "updated": 1476939325,
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/shows/7543"
          },
          "previousepisode": {
            "href": "http://api.tvmaze.com/episodes/966059"
          },
          "nextepisode": {
            "href": "http://api.tvmaze.com/episodes/966060"
          }
        }
      },
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/966060"
        }
      }
    }];

    // For template
    vm.d = Date.now();

    // Those are to allow ordering the result table
    vm.orderBy = "show.name";
    vm.reverse = false;

    // This is to filter the search table
    vm.searchTerm = {};

    // Listen to menubarctrl, which contains the search term
    var listener = $rootScope.$on('MenubarCtrl:rootScope:emit', function (event, data) {
      vm.searchTerm = data;
    });

    // Subscriptions 
    $scope.$on('$destroy', listener);
  });

