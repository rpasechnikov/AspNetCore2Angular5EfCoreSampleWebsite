
/*
* This project uses ASP.NET Core, Entity Framework Core, Angular 5.0 for its codebase
* It also uses Nuget and Yarn for package management. When getting this project for the 
* first time, make sure to install yarn (https://yarnpkg.com/) and run yarn install from
* command prompt (make sure to be in the Client_Core project directory). This will restore
* the clients-side dependencies defined in package.json
* 
* 
* 
* 
* 
* 
*/

* ASP.NET Core 2.*
* NPM 6.*			(npm install -g npm)
* Angular 4.*		(npm install -g @angular/cli)
* Create Angular project inside of out ASP.NET Core project
	> Navigate to the top level directory - eg. one containing Program.cs and folders for Controllers and Views
	> Install angular "ng new olgapasechnikova-app --minimal"
	> Can always append " --dry-run" to firstly see what angular will install, before installing it
* Build the typescript into javascript using angular
	> "ng build"
	> Produces a number of bundles, most of which are the angular code, except for "main" which is the app code
* "ng serve" - not clear but may be useful