import React from 'react';

class Annotations extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const tokens = [
      "CLASS_DEF", "INTERFACE_DEF", "ENUM_DEF", "ANNOTATION_DEF",
      "ANNOTATION_FIELD_DEF", "ENUM_CONSTANT_DEF", "METHOD_DEF,CTOR_DEF"
    ];
    return (
        <div>
          Annotations
          <label>
            Allow same line multiple annotations
            <input type='checkbox'/>
          </label>
          <label>
            Allow same line single parameter less annotation
            <input type='checkbox'/>
          </label>
          <label>
            Allow same line parameterized annotation
            <input type='checkbox'/>
          </label>
          <label>
            Tokens
            {
              tokens.map(token =>
                  <label>
                    {token}
                    <input type='checkbox'/>
                  </label>
              )
            }
          </label>
        </div>
    )
  }
}

export default Annotations;
