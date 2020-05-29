import React from 'react';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC} from '../../Redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    constructor (props) {
        super(props);
        // alert('NEW');
    }

    componentDidMount () {
        // alert('did mount');
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                console.log(response.data.totalCount);
            });
    }

    // getUsers = () => {

    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             this.props.setUsers(response.data.items);
    //         });
    
    //     //     props.setUsers([
    //     //     {id: 1, photoUrl: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
    //     //     {id: 2, photoUrl: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'} },
    //     //     {id: 3, photoUrl: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
    //     // ]);
    //     }
    // }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        // alert('did mount');
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                // this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {

        return <>
        {this.props.isFetching ? <Preloader /> : null}
        
        
        <Users   totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
        /> 
        </>
    }
}

let mapStateToProps = (state) => { //прокидываем через пропсы даннные
    console.log(state.usersPage.totalUsersCount);
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {// прокидываем через пропсы колбэки 
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);