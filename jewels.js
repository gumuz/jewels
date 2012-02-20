/**
 * 
 */

// sprita data
var sprite_data = ["data:image/png;base64,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", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACVFJREFUeNqsV3twVOUV/93X3k02z002iQTyIhDkESApEgGDiFbBWkFI2xFboRbbv+rUkc5gEQva/tFxdOo401Gkjg6tM5ZCi0PGFiptgRjBmJCQGEjIhmwem+wmm2yyj7t377093927ISC2GaebnL13v8d5f79zPg6z//C7tx/YxXHCM4aBZaCvmz4cx/7bDEP77aGjL75DI/psmHKzFC78+DsvH3Ll5u5au3YVFi0qh24qYEyz4Ul6Z2c3zp+/CJ/f/86bH+zbTRPa/2IszlKBFI7jd23euBlTAQUXT7uhxW/2gCByyMrJAFvz3gdHdtHQT4mmvo4C0tN1v2o1dGORaRuPltHxwVcEXsRw7xQmxsM3LE/6z/oZnppA5kQq7LYU9jPt6bqXGwwNy1JSZUSjSudbR/dV0rj630Ig7d52sO/BTRsK1tZWm3FtOPsZzpxuiCoxxf7Aqq2IayrJM74inhxEUcKpC38BGaA8/OhGec091ewdn/y7CfUnP/Ye+vP+oplKCDdZvv2l5nX31JQtrViCjgtDGOqdQPmd87B4+UKx9fMOuHLugJxip3QkYQL3JRJEAbG4gmueTmzdvklcUL4A7Z8OYKA7gLKKebDJYporbeFjTR1nDiWTNKkA/4NH9/4wP/+OpzbWbkBrwwCiEQVKTMNI/yScuRkIRycRCcfgdOaaCvAk8FYSJQHDY4PIK8xAVXUV2huHKCwKIlNxjLgnUVlVDndvX17p3ErPpSvnWljweEsBOUVOe2vtXavR3TZMo4bJTBJ5CDYenmsBsr4QQyP9EGWRxgTwEn8TsTE25/UN0Np8dLX5SEviQ14RaV4XdHS3+nFvbS2YLCbTtJzRjm8992R5yXxIGlk6pUJgLhUZJbKbIz9lpudjIhhATI9CtNsgyBIJtYjeRbtkzvlHh5Fqz0u4dQYfUeARDimIT4qYXzwfO7c8/zO2hCkgpzmyflmYXwL/8CQJRGITnyQWKM70ykLKjeaWZvApaTDsWdDsTpPYO5+Sjsud7aigNRRrU2kzN1i4+IQivMQh4A+jMK8Ysi2VHVM7Y2+n6fw0MQsGZ5ibzA0zkovnEnm/ZMVdGBmLIc2zB8u7C7DySp5J7J2NDQxNYcHiFYkzwiUU4JN8LIOYIQ4hiw4Yl89kMxyQRMEGRdHI9aSPYJja8zM2cWyccECPR7Cnai8ynXZkb/41BEeB6Wot5IWj8Q2aq8cVex2MaID26OAIBGB50fQIoadIUY+pGlJlh4lDJhDpRhwhynJHWjqt0i33sVBQgpmuE2AIMnICLyE9W4Oz5ruI+U9AcfckYp1eZo7p5w8jb2Qvhp37SUycnGDQWUtCtk5HjiUVj1BoElE1Mo0DsiTJXXFD+7YSi5AXBGRmOyFIgnkSBEmEaLOBk9NRfL0OrprViPtOwAj3kkUhk6D0Qw9dQsq8auiXj2Gs8AVIpAALJU+W8DzxIr6h8CTc/V1o72kCHcMfebxdHQwJCVnAfDn3wbU7thbklmwReVuZM9uFsYAfsZhC+hPAGFn4zepnMecBF9SQ77ZIKDlcGDzlw88/fRU2bpw8oMFmk03sUKJhTIWDPv/44IcnzrzNqmU/kZeFQGEvRNEMRw4lqzy3uKwQK6uXorR0LnkjA7rGYzKUCv3ksxRPHwRS+TbV2JzTCd9+8cIzyHREyHIdExNBuN0eNDd1INQ7lWkT5CAtv0YUYLKZB7jHH35uQZo968qS5Ytwz301cDhSMeELI+iPYHJcoeRjYOPEnUMFKNtEGySK6C2FlrwMSiX01AOXswehq2O0R0c6JWxmbgqy81MxFQrj3D8b0d52FaFIoOIPJ1/pYh6wZTic7du+vwV5LhcCvhD6u4ahRFRiQkkU1+nJQVWDaB5/CM6Oj+BaR8KonBhWy2FmOSnlPwc0+b+JiDoOSVLA20AhjCMwFsbgQBBZpEjt/eupLszHyWN/a2cVkymQqmu6mOnMoUUTUKNx6FwCinU6ERqXdK+KHjyPit5z5Nop5NTQWIZlPuXhaAPg6UlDt7oXpTZKQBsVJwIenqCcoSlDkuB4FBFSyFVQSMprpmwTB5iASEg13WhCL/3p5uEhBqxckKk8nenyeXOw568/oU6jA8v66xlkJHCAllyObcZrZxZg50YXwbNqHWMLiCTO5MuUYr8VJT6dtxYO6L6RQa8rK5eOH2WRQUI5nQnlEkfYMGENXT0tuO/ubyBe9gReP70DippIBJEsWHPvYjxyfx88ox2kaAUM0ZiuBTyd/aQyzCPD3iFTZrIYxf0TQ0euXe0mDCCcouplgo94A0YZEIlU7a71daCWekJ9zIbVSyuxvqoK66nsrlmxAnzQhlVVlej1dlLoNII4fppH8snCaqPi1UOymEwmmykQPX76d2+7aTAYGDehV7A2J5GQlVSvfwD5+S5EJw2o1HRAjBM6EvFx850JZXNFRYUYCQxS/PmE8uKNZkWQBWrpxuG+0g0mk8k2FSAa9QxfPdjUcIGyV0oUj6TWZLlEJcNLvUBJaSlC1GCI9kSfILBEM4neZQ7BCQUlRaUIBP1mmWYWJwsSc71EY5+cOQvPcNdBJjOpAMu3YP3Z997vH+hztzVdoo20mcqEJDOyoX/gOvr6epCT5TL77FubkSSxgGbTGs+Qm5qXPrNHEBmUMz7UQ1z+vBU+37C7/uy77zOZTHayJWNKaC2d//pHUfbinSl2u5BfOIc2Suj6ohMXGxsUnufFquoaakq16Wr5JaKQpRKIfdHRBq+3X01JSRUKiqiPJOHdxKepsXH08PEDWywYDrH0FmcoMMkm3jy6b4Oqv/jHzxousO4VqhbtoSbyjU3rH39VZ0aSqw399vcZ3qz3rADxID6PPaXtf721panURsUsFJnqO3zswPdomceSpd96L1CtuOD3xw5so0e6Nc4uF8bdyzeZpVomt2pa4vgZVkHguIRCrJKyyxBnNlrwHD5+sI6eSbhiLh+0ZKhfdTGJEfnZHYNB9AzFHJPh8Q8/PvX3R5aurMTckmLyws1XPya0v/c62ptbqeqNn6ChYaLIDD4xi6/6de6GaUTFD6174sk5uaV1kmgvYdbLcoK3osRML6jxaO+g3/2nj84deZeGr8/majbry6kVEheRk2G4BWIzP7pl4RiRz4qz9v9SIImastXAiLfZyxIibuGKMtvr+X8EGAD8KaflynOYzQAAAABJRU5ErkJggg==",                    "data:image/png;base64,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",                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABVJJREFUeNq0V1tsFGUU/ua2994v0NIuIsUSJNbQEosPPPiqIUSDvpgYTXyxAqmGB421waa+oDagRBIQI4lRAZWQEh8MFxttoa0WDJI2ihqoLfSyO7s7u9vubTxnZra2Zjt0C0xyMv/8/7l8/znnP+cfQdd15HoEQcg1LXYc/OY1RVFaAb0aWVGDVRhLJpNdbS1Pf0AfmVzCuWwJSwQgtB84/pTP4zstl/shFFdBKimFbpkRRCAdDEBXx5GaugEtpm3bu+vZbrZ5LwCI7xz8+gWPr+ioe10zCku8aK4G6goX8v8RBi6OAeFgFPHfLyKmhV56u+WZz+Z7YzkAhPb9X20rLq885avfgpoyJ7au4jXasc4Ks7yAJJjfPf8Ao9Oz0Eb6oE5NbN+7+7nTWU/ksiXD/nGVkPGCdZshu51oWgHEUguN/wfYBME8EzEnCklGwMApWvIQxRczINoYFzs+/rbVW14DV4EXfh9pIeORWSCaICDJhcRzvMY8zMsyLMs67OzYAXAVlpTtcpZWUJxgEBtiAzOLEK8xT5afZVkH61rMiF0IXIrsWOEtKUKalCYyppFM5n+pPT8MvCPR5JXpw0myGumwAMTyBSCLogTJiq9GLi5wmi6bA7CgDpgvBsi8DEA0AEm2duxCAFGSjMRiEolCM8CF3mtI07h36AbIMQbxmOd4jXlES8aQkyTbLLc9BYIkQ9JNt+rWhlOCAz/9MoqmR/zoI8P8NDX4jTle0w3Xmd4wckGyP2h2HtCj0dDgrBYxFMrWjmRFxqaNNUjS1hs2+A3iMc/xmsEjmCBYlnVg8bSxBZAYvtJ/LB5WIZMX2ZMSA1GUORcLVtyzIeI15mFelmFZ1sG6lgNg5tC7r38XCk7+qammF9iQx+VCKDxrGsrGmsY8x2uStXuWYVnWwbqW5QGiwPHD+1ojKjWaRNpQXlNZgOlg3HTzPOI5XjNKMvGyDMuyjuV6gOOmne/+8vLPP37feevWONKpNCqKHaB2TB0vZeYG75bGPMdrzMO857q/2MOyrGO5OQDrlE13vfXysb6zpzvHx28bqqpKXZjSTAAKUTCaQjXNcdYzz8Xz3Z1H33uD+8CUpWPxk7aUdkzkJarZf+LSR+sf3vhEWZEHbkoyanoIUJuZondjBTUhNYbh366e273jsRbiHyWKLqhbOWzdyQOw+jkrutV/oftIfGbWqIwZmB0xi9MowYkk+n848wl93rZKr34n5UIeVzIHe+HE4PT1h1aVGsgDtHOVaJJyfMtK4NrNAHY0la21dp9YypVsKR6Ynw8xSXIacecCIAhzbQAKhURxGE0vdqe4LxcAw88oLjccCtd4IqqyIo0lIjfZdvs82ZDpS1WaTwiUIye7x51OT5mLdupyeenIpRAKqQiHwghHNEQiEaiqeubQvje3c9tYSgjkPDzgHZ+YLGM3OxiAw4tkKokYGY7GolTzo3QRjVJNiD9JvG6iyL0OAdpeebG5urIctVVViM7EkEpmsLq2FlWVKxChxqOGQvj8YMfmfPTm4wFOrsnh63/B7XSj8dFGakASei9dIuNhPFC7GgEvV12j9MbvBwA+Vtr6tWvgcRfg6sgIRF3C+ro6BINBDP16xcgFq/Qm7gcAI48Ghy73lFes3NrYsIn8LKJvYICSLwx/TS1uZv7uyecE5J0D3FYPtO/ZWV7o6xGp9EmyjA319ahb8yDUwFTP4ffbdtq13rs9hlmPFRP5tz//6od05X6cgWhhtffkp11snO9oaq4jeLc/p/MfvmWWEFVbb36CRGPWO71o/O4RgKwn3PN+OGaszE/ZJlAOW/8KMAB9p1fsnpAgrgAAAABJRU5ErkJggg==",                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABUhJREFUeNrsl1tMW3Ucx7+H9lAKtOU2oHVQxsbmGesmV5nbskR0MYZkwWh82ePM4iUm89WH6ZOJ8cH4sBgfjGGagCC4uGQzWzR00AHDBoa7MAeUe7tSCm2B3jjH3zmnZUBbbjHBh53kHzjn///9f5//93fhDyMIAnbzScIuP88BmA3mlI15aElaxlkhujI6kuJbRqdX5siQZ3D13Um8TW/h7QAoGjLR/Fpja73+TD3Q3hnZnTwnJwO9vQQRK543RYHw9CQtk+dSq49jqr8DnV9eajtnxzv0aXkrAIqGLDTXfvt9veF1Ar/SQF9ow6xM4JWT4D//jI61LMOssmbotMv0fbHuDXivXQU/44IQWELW+Q9gf9iD7u++bjs3HQuhiHGeTc6/+qbecOJNoLkJCAXJhGxKSoC2VjBjo2DonQmHwITWjqRgCHA4sJSdhdDwPxQCAf4+K7IrTyHD8AL38pjV1OpFixycWABFwx5yfumLekPNGeDm7+Q4LEutVkub4dYtOQQKMmOYuEO56Afy87D01C7bCDwCgw+RWVoGXV4ud9xx39TqeQahWHGeS84/+bTeUPEq0NMlnzq6cVoacOO6bCICMUzilKY5lceHpTQ1wt55Ws8QA4/Q6Ai0hQehzczkTsw/WYEQAZQ/GfBr7fmLZw2mk8DgA8rX0KpNyWFfPzA/R5tFeKWTxRuR1F/mkapKwazbKQEJBMaTEiHHFDQ5BmjSddyp0Fj5L3NoVpKFmuVRp3/rAuB2AZxGol7JMAUteTIGFB2Spd/KI4h5m4QDHgqHUikfQgQUVV0A9HtMGERHnehbBGD9amW7v+WH0ymna4HxCRqjstSiUU0N/U6KPLhHm7GJ5V/tnSSfT9chWF0BX1OjtJdAFaI2HYXqsAnun3+El2faaS0rhaBtju8qtHWUcrzayHKlVNAewPkUCNAJXKTK0WPA7T9p47AcHrEyEo1gQLKbK6+C++ZNBOfmEAwGoSwsAnuIw3TTFdye/dv83jg+Jt8uEYCnEbrmQZfR8RfHqTKMbFmlXAELpFeANkylJExNBajJSGGIJuL6EckPf3EJXHYnQkNDUiBVxfuRRqd3/taCbs+g+cI4LtJnkhq+KAB5QVCCsBOETm9kj1XICiwukiJeuQ88fvSsCcVVX5BKdiZ/L7zdXWAoFKqiIqRXVGH2jxu4MzMQdU5JBbfYlBTPArcKYqKb47S5RvYIST/rllWgzKb0BaamEpciZfoyyTzRa5XUU2p10FTXwEXOO6etMc7XN6J1ED2yEiKEh3LCR+HQUoW4qLSo68UAiKfXaeFYDGBxZBQsrU2vqsaspR0We3zn8VrxWohJgsjfZ2QPHiYIaiphsmOpcGacMXGXxr5i2HqsYKlxpVdWY37ACsvk3YTO4wHEQozd4Tj9ASO7/5CshNcn/3ESc2O1Cvl6zAyNwB8WkHbsJXgf30enzbKh80QAcSAsXEmOwagqOiiXmdMuqyHwkZsD9YeUZNhsE0h78TA8Iw9hGe3a1PlGADEQhuFebm+mzqg9cIQSMVKOfr/cMHUZ8E47EMgvgHt2BBZbr/n9ic2dbwawBuL6ArqKJga4guwso6akDBh6JLdpcVDPcCanw+UZR/ew1fzhFp1vBSAOxD2uQJ9v1GhzKA98khLhlFQ8dgzj7mj/tpxvFWAthI8gpggiJ9eoUail+A+7xmG29Zk/2qbznTwiMB0d5ZcL0Gk26QSzKUO4XIhO8VtkTvFf3Yo3gqALIgyRn4iceGonJ2d2qIR0j6CREnmncsBSoqv3//phnv9zutsA/wowAM6Mg/b85w9IAAAAAElFTkSuQmCC",                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXJJREFUeNrEV1tsFGUU/mame++2u+22RSqtNOFSAhXRVGskECOWCCZNCA8+GBNDjIRG5fIgPqJCMUUMKRGNiT6oTz5gghcCJhCI3OSqxlYI0kKht22XZXe7O7vz/54zMyvLStmyJTrJ2fnn/885/7mfs4qUEv/rMwUBSlI7Qj8w8LpYJmohhOvvVXljnVU1+XSDWwIbnKG65QyDW8o35PNiGqadqgCqnjae8mnGQHJ7+aFoR+AV2tPObCxbVF2mbceLW8FQ7S/Zznt8xjiMyzRMW+iOQqbTpBCLMbMFroaWJa4L+5bIjvNfQCQMrNhFx1ELa9VOPPblq8dlh0vDw7OBppXA5WOQp48tptMjBKJYAUoMw6hA+Qyg4RmwIIgOAjevawjVA1c+srDq3wLa3tdQXguUkbcUDQhfg2EcrbDvSBfrAq3Gh6UIkisvfQgMHGSbANWNQO/ngCEs6KN19TzrjHEYl2hMWtqdtAvOv13pqwsojzsU8aQ0jDJ6v+CQeiOcJEAsBiRPkGbHiKqMLk5YmvKTGiVrfAJkopZOrFapF15Fb0xu8x9OS/V7RdOi9D7RF5GnH+0Ix+8mgHItYoSaarTDmLGATDmNtJoF+KrIgFeIOWmnqJZCaaZX7nStiN9WNsP741BXf+BwxYcXuYYuLkJ0ALj6G36OGI/QYYIrwL9csGJPJDaaECcxfT4wvxWoqDMZIX7VQhe5QBtC2CDvPGNcpmFa5sG8iCfz5jsmcoF5xak+Y19r94FmaH1EP2xpyqY2tReTLW+kI2kc/9Zae8iK3T1g3jkiWmbnSqgoSvbbTVAnO4M9WDiHLJqVTym2zlovIwOc64GyaYyYgjRDcqIsSH/1sr+Wcl+YKDJrYqNIEBaPJL+EYN75KZlrAXVsW+X6gFftRPMqwEGEo+cmU60LPMSnYiG5UwfOfIdIQmwKbg7vzPozK0BJckdon6ss0IoFz1JkuKjgdJPkY7bvp9Lt6B53kLJqLmUHCfHrT0hFI/vdG0dWcr5knexO6HC72NcpujR6gwyVsLSXYuotdzxMV50FXNPNeOK77HiLZS1QygX1x9fL17XOdaxFLZVTj3PyQT+Zlscu6B/E/u70x8v33NxNO725ArAlqLxhWvtiT8uuNu+nSm21CrczJ2GKfDi8kjpk/5B4Y2/ita4j41RKMWB3sswdQUjA/btW7gx1o56ajdAfkAVIkd5eKOtHKBDQb1dCkZ+GZv38fXPFMnjII5ozp9JNEZgX8TR5m+XxtnPzQ9wxI6i9hFIfBWPMymVjisA8mBfxNHnTHRO2467V/jq/S3kaMXJPlCBFFSxjWLU+23onC0zDtMyDeRFP5s13TNQLlMOX0nGKhjWzq/RmZ4lS2litPVHpVWaqlX7HfdcDSl8RvpUOJ+RffwwZv+gZGftz2DjJd9ihKfMrIf94CHiK4bSkagT/8NbQZ6Ea3xyo2n0WQAMjg/GeqndG1tDXLZ4aOO0IRu04kHfrhtwBaOZC2G7ugd5RcTQUzMyBM8tY8ixPzsuzCAcbK6LajUvPgGlpRcMEItySOO3st5xoJsx29H8aBvEcNX2qZ6xBgzRj6yoep4psFyWB5LguyEuqaakS1YwDk9a6PFbsTGj0DBlnWbv+Ef3C16cSncqbQ8+v/ebWOqT02wFHa97jM8ZhXKYxaS2NJ65TefNA/uNYOstZH/AoDXsvpCK2NlxEfAfWBdufm+tsZ6SD3XrXst1jXTwH2cUs0NbkCkTG5eVDF/Xee03Fhf6aZatjJUHQbiCaHaTzrr1bdZyB1/aeZuMEbRpvISsXskDuOCTzBAsQPGR/37CtIwrQFSXAvUZ6t71O2hH+n/47fiDP3wIMABi+3q39KudiAAAAAElFTkSuQmCC",                    "data:image/png;base64,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"];


function Jewels(canvas) {
    var $this = this;
    $this.canvas = canvas;
    $this.context = canvas[0].getContext('2d');
    $this.sprites = [];
    $this.grid = [];
    $this.selected = [];
    
    $this.swap = [];
    $this.swap_counter = 0;
    $this.clean_swap = false;
    
    $this.init = function() {
        for(var i=0; i<sprite_data.length; i++) {
            var img = new Image();
            img.src = sprite_data[i];
            $this.sprites.push(img);
        }
        
        for(var i=0; i<8; i++) {
            var row = [];
            for(var j=0; j<8; j++) {
                var r = Math.floor(Math.random()*11) % sprite_data.length;
                row.push(r);
            }
            $this.grid.push(row);
        }
        
        $this.canvas.click($this.click);
        
        $this.check_grid();
    };
    
    $this.check_grid = function () {
        var scores = [];
        
        // check horizontals
        for(var y=0; y<8; y++) {
            var items = [[y,0]];
            
            for(var x=1; x<8; x++) {
                if($this.grid[y][x] != $this.grid[items[0][0]][items[0][1]]) {
                    if(items.length>2) for(var i=0; i<items.length;i++) scores.push(items[i]);
                    items = [];
                }
                items.push([y,x]);
            }
            if(items.length>2) for(var i=0; i<items.length;i++) scores.push(items[i]);
        }  
        
        // check verticals
        for(var x=0; x<8; x++) {
            var items = [[0,x]];
            
            for(var y=1; y<8; y++) {
                if($this.grid[y][x] != $this.grid[items[0][0]][items[0][1]]) {
                    if(items.length>2) for(var i=0; i<items.length;i++) scores.push(items[i]);
                    items = [];
                }
                items.push([y,x]);
            }
            if(items.length>2) for(var i=0; i<items.length;i++) scores.push(items[i]);
        } 
        
        result = [];
        
        for(var i=0; i<scores.length; i++) {
            if($this.grid[scores[i][0]][scores[i][1]]>-1) {
                result.push(scores[i]);
                $this.grid[scores[i][0]][scores[i][1]] = -1;
            }
        }
        
        if(result.length) $this.clean_grid();
        
        return result.length;
    };
    
    $this.clean_grid = function() {
        $this.clean_swap = true;
        for(var x=0; x<8; x++) {
            for(var y=7; y>0; y--) {
                if($this.grid[y][x] == -1 && $this.grid[y-1][x] != -1) {
                    $this.swap = [[y,x],[y-1,x]];
                    return;
                }
            }            
        }
        $this.clean_swap = false;
        $this.refill_grid();
        $this.check_grid();
    }
    
    $this.refill_grid = function() {
        for(var x=0; x<8; x++) {
            for(var y=0; y<8; y++) {
                if($this.grid[y][x] == -1) {
                    $this.grid[y][x] = Math.floor(Math.random()*11) % sprite_data.length
                }
            }
        }
    }
    
    $this.click = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        
        var grid_x = Math.floor(x/32);
        var grid_y = Math.floor(y/32);
        
        if($this.selected.length) {
            // only y OR x can change
            if(grid_y != $this.selected[0] && grid_x != $this.selected[1]) {
                $this.selected = [];
                return;
            }
            if(Math.abs(grid_y-$this.selected[0])>1 || Math.abs(grid_x-$this.selected[1])>1) {
                $this.selected = [];
                return;
            }
            
            // swap
            $this.swap.push([$this.selected[0], $this.selected[1]]);
            $this.swap.push([grid_y, grid_x]);
            
            $this.selected = [];
        } else {
            $this.selected = [grid_y,grid_x];
        }
    };
    
    $this.run = function() {
        $this.init();
        setInterval($this.draw, 50);
    };
    
    $this.draw = function() {
        
        // swapping?
        if($this.swap.length) {
            var swap1_y = $this.swap[0][0], swap1_x = $this.swap[0][1];
            var swap2_y = $this.swap[1][0], swap2_x = $this.swap[1][1];
            
            if(($this.swap_counter>2&&!$this.clean_swap) || (($this.swap_counter>1&&$this.clean_swap))) {
                var tmp = $this.grid[swap1_y][swap1_x];
                var tmp_swap = $this.swap;
                
                $this.grid[swap1_y][swap1_x] = $this.grid[swap2_y][swap2_x];
                $this.grid[swap2_y][swap2_x] = tmp;
                $this.swap = [];
                $this.swap_counter = 0;

                
                if(!$this.clean_swap) {
                    var score = $this.check_grid();
                    if(!score){
                        var tmp = $this.grid[swap1_y][swap1_x];
                        $this.grid[swap1_y][swap1_x] = $this.grid[swap2_y][swap2_x];
                        $this.grid[swap2_y][swap2_x] = tmp;                    
                    }
                }
                $this.clean_grid();
            } else {
                var swap_count = $this.swap_counter++;
            }
        }
        
        $this.context.fillStyle = "white";
        $this.context.fillRect(0, 0, 256, 256);
        for(var y=0; y<8; y++) {
            for(var x=0; x<8; x++) {
                var sprite_id = $this.grid[y][x];
                
                if(sprite_id==-1) {
//                    $this.context.fillStyle = "grey";
//                    $this.context.fillRect(x*32, y*32, 32, 32);
                    continue;
                }
                
                var sprite = $this.sprites[sprite_id];
                var draw_x = x*32, draw_y = y*32;
                
                
                // selected?
                if($this.selected[0] == y && $this.selected[1] == x) {
                    $this.context.fillStyle = "lightgrey";
                    $this.context.fillRect(x*32, y*32, 32, 32);
                }
                
                if($this.clean_swap) {
                    var speed = swap_count*32;
                } else {
                    var speed = swap_count*16;
                }
                
                if(swap1_y == y && swap1_x == x) {
                    draw_x += (swap2_x - swap1_x)*speed;
                    draw_y += (swap2_y - swap1_y)*speed;
                }
                
                if(swap2_y == y && swap2_x == x) {
                    draw_x += (swap1_x - swap2_x)*speed;
                    draw_y += (swap1_y - swap2_y)*speed;
                }
                
                $this.context.drawImage(sprite, draw_x, draw_y);
            }
        }
    };
};




$(document).ready(function() {
    var canvas = $("canvas");
    var jewels = new Jewels(canvas);
    jewels.run();
});