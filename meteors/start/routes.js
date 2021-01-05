'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Task 3.3: Routing Get About Us
Route.get('/about-us', () => 'About Us')

// Task 3.4: Routing Get required Params record-id
// :______ cannot have dashes, only underscore
Route.get('view-record/:record_id', ({ params }) => {
  return `${params.id}`
})

// Task 3.5: Routing Naming the route
Route.get('users', () => 'This is a named route called special').as('special.index')

// Task 4: Controller route
// (url, string 'name of controller file in app/controllers.name of
// method (function?) u want to call inside theis controller')
Route.get('/sightings', 'SightingController.index')


// response testing: all the below are consolidated examples for the
// route.js side (Route.get('sightings', 'SightingController'))
// mashed with the Sightcontroller.js side (return response.json ({json data}) )

// AdonisJs passes the current HTTP response object (has req, res, params, view)
// as part of the HTTP Context which is sent to all route handlers and middleware.
// Route.get('/restest', ({ response }) => {
//   response.send('asdfghjkl')
// })

// 3 ways to return array of users in JSON format
// Route.get('/users', async ({ response }) => {
//   const users = await User.all()
//   response.send(users)
// })

// Same thing as the above code
// Route.get('/users', async ({ response }) => {
//   response.json(await User.all())
// })

// Same thing as the above codes
// Route.get('/sighting', async () => {
//   return await Sighting.all()
// })


// Task 5
Route.get('/sightings','SightingController.about')

// need to route in SightingController so the below answer is wrong
// Route.get('sightings/about',({view})=> {
//   return view.render('sighting-index')
// })

// Task 6 (the /view at the end of the url is arbitrary, just answering as per qn)
Route.get('/sightings/details/:detail_id/view', 'SightingController.details')

// Task 7.1-3: create get route
Route.get('sightings/create','SightingController.create')

// Task 7.7 create post route
// test route first
// Route.post('sightings/create',({request})=>{
//   console.log("Data received")
//   console.log(request.post())
//   return "data received"
// })

// when ok, write actual route
Route.post('sightings/create','SightingController.processCreate')

Route.on('/').render('welcome')
