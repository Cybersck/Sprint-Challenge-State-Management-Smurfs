import axios from 'axios';

export const getData = () => dispatch => {
    
    axios.get('http://localhost/smurfs')
    .then(res => {
        dispatch({type: 'get', payload: res.data});
    })
    .catch(err => {
        window.alert(err);
    });
}
export const submitForm = (form) => dispatch => {
    axios.post('http://localhost/smurfs', form)
    .then(res => {
        dispatch({type: 'post'});
        console.log(res);
    })
    .catch(err => {
        window.alert(err);
    });
}
export const deleteData = (id) => dispatch => {
    axios.delete(`http://localhost/smurfs/${id}`)
    .then(res => {
        dispatch({type: 'delete'});
    })
    .catch(err => {
        window.alert(err);
    });
}
export const setForm = (type, data) => dispatch => {
    dispatch({type: 'set', payloadType: type, payload: data});
}