import { fireEvent, render, screen } from '@testing-library/react'
import FriendRow from './FriendRow'

// unit testing
describe("testing <FriendRow /> by mocking dependencies", () => {
    let callback = jest.fn(); // mock function
    let person = {
        "id": 22,
        "firstName": "Harry",
        "lastName": "Potter"
    }

    it("render <FriendRow />", () => {
        render(<FriendRow
            key={person.id}
            person={person}
            delEvent={callback} />);

       let elem = screen.getByText(/Harry/);
       expect(elem).toBeInTheDocument();
      // screen.debug();
    });

    it("delete <FriendRow />", () => {
        render(<FriendRow
            key={person.id}
            person={person}
            delEvent={callback} />);
            let btn = screen.getByRole('button');
            fireEvent.click(btn);
            expect(callback).toBeCalledTimes(1);
            expect(callback).toBeCalledWith(22);
      
    });

});