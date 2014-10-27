dustjs-helpers-markdown
=======================

Parse markdown content on KrakenJS views

[![KrakenJS Logo](http://krakenjs.com/img/kraken.svg)](http://krakenjs.com/)

#Install dependence

    npm install dustjs-helpers-markdown --save

### On ./config/config.json find this code

    "view engines": {
        "js": {
          "module": "engine-munger",
          "renderer": {
            "method": "js",
            "arguments": [
              { "cache": true },
              {
                "views": "config:express.views",
                "view engine": "config:express.view engine",
                "specialization": "config:specialization",
                "i18n": "config:i18n"
              }
            ]
          }
        }
      },


### Replace with:

    "view engines": {
        "js": {
          "module": "engine-munger",
          "renderer": {
            "method": "js",
            "arguments": [
              { "cache": true, "helpers": ["dustjs-helpers-markdown"] },
              {
                "views": "config:express.views",
                "view engine": "config:express.view engine",
                "specialization": "config:specialization",
                "i18n": "config:i18n"
              }
            ]
          }
        }
      },

### On the view

    <div>
    {@markdown}
        ![KrakenJS Logo](http://krakenjs.com/img/kraken.svg)
    {/markdown}
    </div>
