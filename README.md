# Nava Notes App (React.js)

**Deployed version is now ready for usage and running at [https://nava-notes-app.vercel.app](https://nava-notes-app.vercel.app 'Use app')**

These are some in app screenshots:

![](./src/assets/capture00.jpeg 'App in light mode')
![](./src/assets/capture01.jpeg 'App in dark mode')

## Features changelog

- This application can perform all CRUD operations to manipulate notes.

- Edit created notes. Preserves the note formating structure after saving or updating a note.

- Uses the browser localStorage to save all application data.

- Restore function: you can restore a deleted note, since they are stored in trash after delete.

- Delete permanentilly all trash notes by one click.

- Shows a non intrusive confirmation notification after doing some actions like deleting a note, restoring a note and wipping the trash.

### Version 1.1.1 change log
-  Fixed empty 
object data bug that was preventing notes to be correctly updated.
- Icon or text notification overflow on small screens (up to 280px) fixed.
### Version 1.1.0 change log

- Upgraded react to version 18.0.0.
- Switched CRA to Vite as development Engine.
- Theme preferences are now saved on localstorage.
- Note action buttons colorization follows the current active color theme.
- sort by last or first modification strange ordenation bug fixed.

### Version 1.0.1 change log

- Added a confirmation dialog when trying to wipe the trash.
- Minor styling bugs fixed.

### Version 1.0.0 change log

- Refreshing page to change themes is now fixed.
- Improved appearence app colors in both dark and light themes.
- Adopted better responsive design layout to be suitable and reliable to 280px, so everyone can enjoy it.
- Abandoned **PT Sans** font, and switched to **Roboto Slab** for better readbility (thanks to community).

## Known issues

- You can't log into an cloud account to save notes, since this app uses localStorage to store user data. If you switch browser, you will not be able to access saved notes. If the browser cache and storage is cleared, all application data and settings will be lost.

## Scripts for testing

Make sure you have installed **Node.js (v16.0.3 or later recommended) and also comes with npm**.\
In the project directory, you can run in terminal:

```bash
 npm run dev
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
Portfolio: [https://codenut-dev.vercel.app](https://codenut-dev.vercel.app 'See my github profile')

### If you like this project, please consider leaving a star on this repository so I can continue improving this app.

### With kindest regards, Kain Nhantumbo from Mozambique.

## License

Licensed under MIT License\
Copyright &copy; 2022 Kain Nhantumbo.
