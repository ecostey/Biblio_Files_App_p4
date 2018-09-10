# Biblio_Files_App_p4

Biblio Files is an app designed for Librarians. 
It’s primary purpose is to keep track of the books in a library’s catalogue. 

The app functions using full crud on 2 tables: books and patrons. 
In the ERD below, there is a post-MVP table including AUTH/accounts for Librarians.

![screen shot 2018-09-04 at 09 28 16](https://user-images.githubusercontent.com/36941422/45300442-56640380-b4dc-11e8-938d-48c22e6f7293.png)

*User Stories: 
As a librarian, I want to:
VIEW ALL books in the library’s catalogue
VIEW ONE book in the catalogue
Make UPDATES to that one book (including the book’s status- checked in or out)
ADD NEW books to the library’s catalogue
REMOVE the books to the library’s catalogue

*Technologies Used:
React (JSX)
Ruby on Rails 
Bulma - create modal
ReachUI - Delete & Update modals

*Successes:
This project uses 3 modals (For create-Bulma, update-ReachUI and delete-ReachUI). It was a little tricky to figure out how to set up the modals, but once they were up, they were very easy to manage & I'm glad I used them.
Bulma's stylings are more elegant & have smoother transitions, but they require far more set up (Bulma provides NO JavaScript). ReachUI is build for react and was ready to go basically from the begining. However, ReachUI required more manual styling in CSS and JSX.



*Challenges:
I've run into an issue where the update form REQUIRES you to update ALL the information. 
Any update field that remains un-changed reverts to null... Not Good.

*POST MVP:
	-Create Librarian table/logins/accounts (AUTH)
	-Allow librarians to create/update/delete/view patron’s accounts
	-Generate alerts for overdue books
