# Animal Health Ireland Website Map

Stream Two Project: Interactive Frontend Development 
The intension of this standalone page is to all farmers to find AHI approved trained veterinary practitioner in their area.  The main aim is to have a centralised area for farmers to find their vets depending on the area they are trained in. 

## Demo
A live demo can be found <a href="https://lisaannbyrne1.github.io/MSP2-AHI-Map/">here</a>

![Demo](https://github.com/lisaannbyrne1/MSP2-AHI-Map/blob/master/assets/Demo.gif "=Demo")

## UX
### User stories
As a staff member, I expect to be able to interact with the map and assist callers with finding AHI approved trained veterinary practitioner in their area.
As a member of the general public, I expect to be able to find an AHI approved trained veterinary practitioner in my area.
As a trained veterinary practitioner, I expect to see my correct contact details and areas trained on the map for my clients to contact me. 
### Strategy
The goal of this page is to make it as easy as possible for farmers to find AHI approved trained veterinary practitioner in their area.
### Scope
This page will be aimed for farmers and vets specifically and therefore I want to make it as easy to follow as possible and to make the data clear and easy to read. 
### Structure
This standalone page will contain a search section with results section and a map section. This page will be on broken into two sections. Section one will be search and results which will be on a grey background and the second section will be a full sized map zoom to Ireland. 
### Skeleton
Desktop and mobile wireframes have been created – click here. 
Surface
The background of the page is white with the search section in grey to provide section definition.
### Technologies
•	HTML
•	CSS
•	JavaScript
•	Bootstrap (4.4.1)
•	Google Map API

### Features
The widget has a dropdown option set, when a selection is made, JavaScript function zooms to that set area on the map.  A JavaScript function also returns the associated list of map marker results for that area. The markers all contain info windows that when clicked shows the name of practice associated with that marker. 
Features Left to Implement
A feature I have left to implement is that if the user clicks on a result the associated map marker will bounce on the map to identify itself.  Another feature I would like to implement is an additional filter by the programme area the practice is trained in. 

### Testing
The website was firstly tested against the criteria set out in the user stories, the criteria was met in each case. The zoom functionality brings the user into enough range for them to also look at the map markers close to there filtered County. The site has been tested in various browser including Chrome, Firefox, Edge and Safari. Findings from this testing showed that the website responded  well on each of these browsers. It has also been testing for compatibility and responsiveness on mobile devices. During this testing I found although flex stacks the div with the map was small when results were populated. On mobile it works best in landscape mode rather then portrait mode. 

### Deployment
Hosted on GitHub pages and was deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

## Credits

### Content 

All contents on this website have been provided with permission by my employer Animal Health Ireland as part of an inhouse website redevelopment project. 

### Media

All photos were taken from Animal Health Ireland with permission. 

### Acknowledgements

I received inspiration from several sources for this project, they included feedback from users both internal and external to the company.  I followed the Google Maps API documentation and also examples found online. 
