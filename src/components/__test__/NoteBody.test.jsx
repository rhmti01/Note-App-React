import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import NoteBody from "../NoteBody";
import NoteProvider from "../../context/NoteContext";

function renderWithNoteProvider(ui) {
  return render(
    <NoteProvider
      notes={[]}
      handlers={{
        addNote: vi.fn(),
        removeNote: vi.fn(),
        completeNote: vi.fn(),
        editNote: vi.fn(),
        sortNotes: () => [],
      }}
    >
      {ui}
    </NoteProvider>
  );
}

function addNoteByTest(notes) {
  const inputTitle = screen.getByPlaceholderText(/Note Title .../i);
  const inputDescription = screen.getByPlaceholderText(/Note Description .../i);
  const button = screen.getByRole("button", { name: /Add New Note/i });
  const normalPriorityBtn = screen.getByRole("button", { name: /Normal/i });

  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, {
      target: { value: note.description },
    });
    fireEvent.click(normalPriorityBtn);

    fireEvent.click(button);
  });
}



describe("group test", () => {
  test("Note App #1 : should inputs and priority be empty after submit", async () => {
    renderWithNoteProvider(<NoteBody />);

    const inputTitle = screen.getByPlaceholderText(/Note Title .../i);
    const inputDescription =
      screen.getByPlaceholderText(/Note Description .../i);
    const button = screen.getByRole("button", { name: /Add New Note/i });
    const normalPriorityBtn = screen.getByRole("button", { name: /Normal/i });

    fireEvent.change(inputTitle, { target: { value: "first note title" } });
    fireEvent.change(inputDescription, {
      target: { value: "first note discription" },
    });
    fireEvent.click(normalPriorityBtn);

    fireEvent.click(button);

    await waitFor(() => {
      expect(inputTitle).toHaveValue("");
      expect(inputDescription).toHaveValue("");
    });
  });



  test("Note App #2 : should multipule note will be create", async () => {
    renderWithNoteProvider(<NoteBody />);

    const inputTitle = screen.getByPlaceholderText(/Note Title .../i);
    const inputDescription =
      screen.getByPlaceholderText(/Note Description .../i);
    const button = screen.getByRole("button", { name: /Add New Note/i });
    const normalPriorityBtn = screen.getByRole("button", { name: /Normal/i });

    addNoteByTest([
      { title: "note one title", description: "note one description" },
      { title: "note two title", description: "note two description" },
    ]);

    await waitFor(() => {
      expect(inputTitle).toHaveValue("");
      expect(inputDescription).toHaveValue("");
    });
  });
});
