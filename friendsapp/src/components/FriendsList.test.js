import { fireEvent, render, screen } from '@testing-library/react'
import FriendList from './FriendsList';
// example of Integration testing not unit testing
// Assemble --> Test Suite
describe("unit testing <FriendsList />", () => {
    // test spec / test case
    it("render <FriendsList />", () => {
        render(<FriendList />); // not react-dom renderer
        //screen.debug();
        let btns = screen.getAllByRole('button');
        expect(btns.length).toBe(6); // assertion
    })

    // test spec / test case
    it("delete a Friend", () => {
        render(<FriendList />); // not react-dom renderer
        //screen.debug();
        let btns = screen.getAllByRole('button');
        fireEvent.click(btns[3]);
        btns = screen.getAllByRole('button');
        expect(btns.length).toBe(5); // assertion
    })

    // test spec / test case
    it("filter Friends", () => {
        render(<FriendList />); 
        let txtBox = screen.getByPlaceholderText('search by name');
        fireEvent.change(txtBox,{"target":{"value": "Geller"}});
        let btns = screen.getAllByRole('button');
        expect(btns.length).toBe(2);
    })
});