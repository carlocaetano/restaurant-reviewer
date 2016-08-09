import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet/components/form';
import FormField from 'grommet/components/formfield';
import FormFields from 'grommet/components/formfields';
import Footer from 'grommet/components/footer';
import Button from 'grommet/components/button';
import NumberInput from 'grommet/components/numberinput';
import Menu from 'grommet/components/menu';

const tabIndexes = {
  nameInput: 0,
  textInput: 1,
  ratingInput: 2,
};

class AddReviewForm extends Component {
  constructor() {
    super();
    this.watchKeys = this.watchKeys.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.state = {
      selectedTab: tabIndexes.nameInput,
    };
  }
  componentDidMount() {
    this.handleFocus();
  }
  watchKeys(e) {
    // if (e.keyCode === 9) {
    //   e.preventDefault();
    //   if (e.shiftKey) {
    //     if (document.activeElement === this.refs.nameInput) {
    //       console.log(`Made it`);
    //       this.refs.buttonInput.focus();
    //     } else {
    //       console.log(`Need some logic here`)
    //     }
    //   } else {
    //     if (document.activeElement === this.refs.buttonInput) {
    //       this.refs.nameInput.focus();
    //     } else if (document.activeElement === this.refs.nameInput) {
    //       this.ref
    //     }
    //   }
    // }
  }
  handleFocus() {
    this.refs.nameInput.focus();
    this.refs.nameInput.select();
  }
  render() {
    const {
      onSubmitReview,
      nameInput,
      ratingInput,
      textInput,
      onClear,
    } = this.props;
    return (
      <div onKeyDown={this.watchKeys} className={styles.addReviewForm}>
        <Form onSubmit={onSubmitReview}>
          <FormFields>
            <FormField
              label="Name"
              htmlFor="nameInput"
              help="What is your name"
              error={nameInput.touched && nameInput.error ? nameInput.error : null}
            >
              <input
                {...nameInput}
                ref="nameInput"
                id="nameInput"
                type="text"
                name="name"
              />
            </FormField>
            <FormField
              label="Review"
              htmlFor="textInput"
              help="Add some text for your review"
              error={textInput.touched && textInput.error ? textInput.error : null}
            >
              <textarea
                {...textInput}
                id="textInput"
                ref="textInput"
                name="text"
                type="text"
                rows="5"
                cols="40"
              />
            </FormField>
            <FormField
              label="Review"
              htmlFor="ratingInput"
              help="How many stars (1-5)"
              error={ratingInput.touched && ratingInput.error ? ratingInput.error : null}
            >
              <NumberInput
                {...ratingInput}
                min="1"
                ref="ratingInput"
                max="5"
                id="ratingInput"
                name="rating"
              />
            </FormField>
          </FormFields>
          <Footer className={styles.footer}>
            <Menu direction="row">
              <Button
                className={styles.button}
                label="Submit"
                primary
                onClick={() => onSubmitReview({
                  rating: ratingInput.value,
                  text: textInput.value,
                  name: nameInput.value,
                })}
              />
              <Button label="Clear" onClick={onClear} />
            </Menu>
          </Footer>
        </Form>
      </div>
    );
  }
}

AddReviewForm.propTypes = {
  nameInput: PropTypes.object.isRequired,
  textInput: PropTypes.object.isRequired,
  ratingInput: PropTypes.object.isRequired,
  onSubmitReview: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default cssModules(AddReviewForm, styles);
