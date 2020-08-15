export const addProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const storage = firebase.storage();

    const {
      title,
      englishDescription,
      polishDescription,
      englishShortDescription,
      polishShortDescription,
      webUrl,
      github,
      image,
      fileImage,
    } = project;

    storage
      .ref(`files/${image}`)
      .put(fileImage)
      .then(() => {
        storage
          .ref(`files`)
          .child(image)
          .getDownloadURL()
          .then((url) => {
            const imageUrl = url;
            firestore
              .collection('projects')
              .add({
                title,
                englishDescription,
                polishDescription,
                englishShortDescription,
                polishShortDescription,
                imageUrl,
                image,
                webUrl,
                github,
              })
              .then(() => {
                dispatch({ type: 'ADD NEW PROJECT', project });
              });
          });
      })
      .catch((err) => {
        dispatch({ type: 'ADD PROJECT ERROR', err });
      });
  };
};

export const deleteProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const storage = firebase.storage();

    const { imageName, id } = project;

    firestore
      .collection('projects')
      .doc(id)
      .delete()
      .then(() => {
        storage
          .ref(`files/${imageName}`)
          .delete()
          .then(() => {
            dispatch({ type: 'DELETE PROJECT' });
          });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE PROJECT ERROR', err });
      });
  };
};
