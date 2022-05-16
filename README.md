# Nava Notes App
**Deployed version is now ready for usage and running at [https://nava-notes-app.vercel.app](https://nava-notes-app.vercel.app 'Use app')**  
  
These are some in app screenshots:

![](./src/assets/capture00.jpeg 'App in light mode')
![](./src/assets/capture01.jpeg 'App in dark mode')

## Features
- This application can perform all CRUD operations to manipulate notes.

- Edit created notes. Preserves the note formating structure after saving or updating a note.

- Uses the browser localStorage to save all application data.

- Restore function: you can restore a deleted note, since they are stored in trash after delete.

- Delete permanentilly all trash notes by one click.

- Shows a non intrusive confirmation notification after doing some actions like deleting a note, restoring a note and wipping the trash.


## Version 1.0.1 (naftar) Changelog
- Added a confirmation dialog when trying to wipe the trash.
- Minor styling bugs fixed.

## Version 1.0.0 (naftar) Changelog
- Refreshing page to change themes is now fixed.
- Improved appearence app colors in both dark and light themes.
- Adopted better responsive design layout to be suitable and reliable to 280px, so everyone can enjoy it. 
- Abandoned **PT Sans** font, and switched to **Roboto Slab** for better readbility (thanks to community).
## Known issues

- sort by last or first modifification doesn't work, yet.

- You can't log into an cloud account to save notes, since the app is using localStorage. If you switch the browser you will not acess the notes. If the browser cache and storage are cleared, all application data and settings will be lost.

## Scripts for testing
Make sure you have installed **Node.js (v16.0.3 or later recommended) and also comes with npm**.\
In the project directory, you can run in terminal:

```bash
 npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```bash
npm run build
```

Builds the app for production to the **build folder**.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Contact 
E-mail: [nhantumbok@gmail.com](nhantumbok@gmail.com 'Send an email')\
Github: [https://github.com/KainNhantumbo](https://github.com/KainNhantumbo 'See my github profile')  
Portifolio: [https://portifolio-dev-kainnhantumbo.vercel.app](https://portifolio-dev-kainnhantumbo.vercel.app 'See my github profile')

### If you like this project, please consider leaving a star on this repository so I can continue improving this app.  
### With kindest regards, Kain Nhantumbo from Mozambique.


## License
Licensed under MIT License, Copyright &copy; 2022 Kain Nhantumbo.