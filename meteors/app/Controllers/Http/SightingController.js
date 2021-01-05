'use strict'

class SightingController {
  index({ response }) {
    // return 'SightingController.index'
    return response.json({
      "sightings": [
        {
          "date": "22/01/2020",
          "coordinate": {
            "lat": 1.07,
            "lng": 2.02
          }
        }
      ]
    })
  };
  // (c) c is a placeholder for the HTTP Context that has been DESTRUCTRED
  // DESTRUCTURED context = {request, params, response, view}

  // context before destructuring = {
  // 'request': {type: 'request'},
  // 'params': {type: 'params'},
  // 'response': {type: 'response'},
  // 'view': {type: 'view'},
  // }

  about(c) {
    return c.view.render('sighting-index')
  };
  details({ params, view }) {
    let detailId = params.detail_id;
    return view.render('sightings-details', {
      infoWanted: detailId
    })
  }
  create(c) {
    return c.view.render('sightings-create')

  }
  processCreate({ request }) {
    let sighting = request.post()
    return sighting
  }
}


module.exports = SightingController
