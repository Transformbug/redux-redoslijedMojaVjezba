export const nekaAkcijaThunkAliNijeAsync = () => {
    return dispatch => {
       dispatch({type: 'PROMJENAUSAMOPRVA'})
       //Pa opet dipatch poziv, nema ništa async ovdje...
       //btw. dogodi se state batching to, redux updat-a state putem oba dispatch-a pa se onda dogodi re-redner komponeti koje su zahvaćenim ovim action types tj. koje to 'slušaju'
       //u mapStateToProps.
       //bitno je naglastiti da redux obavi svoj state upadate odmah nakon prvog disptcha() pa možemo vidjeti kako ide mapStatetoProps kod svih komponeti u debugger,ali re-render se dogodi tek
       //kad se obava oba dvije redux state promjene.
       dispatch({type: 'MATE'})

    };
};