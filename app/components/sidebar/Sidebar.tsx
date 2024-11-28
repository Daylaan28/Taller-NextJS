import { useState } from "react";
import { NoteData } from "../../types/Note";
import NoteCard from "../note-card/NoteCard";

interface NoteListProps {
    notes: NoteData[];
    onUpdateNote: (updatedNote: NoteData) => Promise<void>;
    onDeleteNote: (noteId: number) => void;
}

const NoteList = ({ notes, onUpdateNote, onDeleteNote }: NoteListProps) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filtrar las notas en función de la búsqueda
    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Evento para limpiar la búsqueda
    const handleClearSearch = () => {
        setSearchQuery("");  // Resetear el estado de la búsqueda
    };

    return (
        <div className="flex flex-wrap p-4 gap-4 overflow-auto max-h-screen">
            <div className="w-full mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar notas..."
                    className="w-full p-2 border rounded"
                />
                <button
                    onClick={handleClearSearch}  // Limpiar búsqueda
                    className="text-white bg-gray-600 hover:bg-gray-500 p-2 rounded mt-2 w-full"
                >
                    Limpiar búsqueda
                </button>
            </div>

            {filteredNotes.length === 0 ? (
                <div className="w-full text-center text-gray-600">No se encontraron notas</div>
            ) : (
                filteredNotes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onUpdateNote={onUpdateNote}
                        onDeleteNote={onDeleteNote}
                    />
                ))
            )}
        </div>
    );
};

export default NoteList;


