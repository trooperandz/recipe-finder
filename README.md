## A recipe finder app using React and Redux

## TODOs:
 - Complete pagination
 - Modal overflow scroll not working as desired
 - Limit results to 5 per instructions
 - A bit of responsiveness cleanup
 - Add main hero image icon per mockup
 - Heart Icon feedback on click (set active status etc)
 - Would like to add a loading spinner for search etc
 - Would prefer more React cleanup time (propTypes etc...)

### Note:  Router history.push() route setup was causing the modal to fire if reached by direct link.  I commented it out, and the main Router structure needs revisiting in terms of the subroute setup
 - You can still test the direct url modal recipe load functionality with this link: https://vast-dusk-55857.herokuapp.com/52966
 - But if you leave the id in the route, you'll keep getting the modal on state changes (so take it out after you test it)
