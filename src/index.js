import Preview from "./Preview"
const icon = require('./icon.png')

export const fn = ({ term, display }) => {
  // Put your plugin code here
  let match = term.match(/^con\s(.+)/);

  if(match) {
  var connections = term.replace('con', '');
  var locations = connections.split(['to']);
  console.log(locations);
  const request = require('request');
  
  let url = `http://transport.opendata.ch/v1/connections?from=${locations[0]}&to=${locations[1]}`

  request(url, { json: true }, (err, res, body) => {
    if (err) {return console.log(err); }
  display({
    icon,
    title: `You've entered ${connections}`,
    getPreview: () => <Preview  result={res.body}/>
  })
  console.log(res.body);
  });
  }
}