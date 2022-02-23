import React, { useState } from 'react';
import Header from './components/Header';
import NotesPackage from './components/NotesPackage';
import Footer from './components/Footer';
import ConfirmModal from './components/ConfirmModal';
import { retrieveNotes } from './scripts/functions';
import { ShowModal } from './scripts/functions';
import styled from 'styled-components';
import { Route, Link, Switch } from 'react-router-dom';

const Main = () => {
	const { removeModal, renderConfirmModal, visible } = ShowModal();
	var notesData = retrieveNotes();
	notesData = [];
	
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
		</>
	);
}

export default Main;
