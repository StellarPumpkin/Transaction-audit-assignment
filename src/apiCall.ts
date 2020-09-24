import url from "url";
import rp from "request-promise";
const apiCall = function(date:string,from:string,to:string){
    const requestUrl = url.format({
        protocol: "https",
        hostname: "api.frankfurter.app",
        pathname: "/" + date,
        query: {
          from: from,
          to: to
        }
      });
      return rp(requestUrl)
        .then(parsedBody => {
          return JSON.parse(parsedBody).rates[to];
        })
        .catch(err => {
          console.log(err);

          return null;
        })
    }
export= apiCall
