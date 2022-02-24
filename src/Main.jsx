import React, { useState } from 'react';
import Header from './components/Header';
import NotesPackage from './components/NotesPackage';
import Footer from './components/Footer';
import ConfirmModal from './components/ConfirmModal';
import { retrieveNotes } from './scripts/functions';
import { ShowModal } from './scripts/functions';
import { Route, Routes } from 'react-router-dom';
import AddNote from './pages/AddNote';
import Archive from './pages/Archive';
import Settings from './pages/Settings';

const Main = () => {
	const { removeModal, renderConfirmModal, visible } = ShowModal();
	var notesData = retrieveNotes();
	// notesData = [];
	
	console.log(notesData)
	// controla o modal de confirmacao ao deletar nota
	
	const openRoute = (e) => {
		console.log(e.target.dataset)
	}
	return (
		<>
			<Header title="Notes"/>
			<NotesPackage 
				eventRemoveBtn={renderConfirmModal} 
				notesData={notesData}
			/>
			<ConfirmModal 
				removeModal={removeModal}
				status={visible}
			/>
			<Footer event={openRoute} />
			<Routes>
				<Route path='/pages/AddNote'  element={<AddNote/>} />
				<Route path='/pages/Archive'  element={<Archive/>} />
				<Route path='/pages/Settings' element={<Settings/>} />
			</Routes>
		</>
	);
}

export default Main;
