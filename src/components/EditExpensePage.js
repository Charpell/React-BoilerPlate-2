import React from 'react';

const EditExchangePage = (props) => {
  return (
    <div>
      Editing the expenses with id of {props.match.params.id}
    </div>
  )
}

export default EditExchangePage;