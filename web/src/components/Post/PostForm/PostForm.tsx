import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'



const PostForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.post?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="content"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Content
        </Label>
        
          <TextField
            name="content"
            defaultValue={props.post?.content}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="content" className="rw-field-error" />

        <Label
          name="numLikes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Num likes
        </Label>
        
          <NumberField
            name="numLikes"
            defaultValue={props.post?.numLikes}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="numLikes" className="rw-field-error" />

        <Label
          name="authorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author id
        </Label>
        
          <NumberField
            name="authorId"
            defaultValue={props.post?.authorId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="authorId" className="rw-field-error" />

        <Label
          name="draft"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Draft
        </Label>
        
          <CheckboxField
            name="draft"
            defaultChecked={props.post?.draft}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="draft" className="rw-field-error" />

        <Label
          name="featured"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Featured
        </Label>
        
          <CheckboxField
            name="featured"
            defaultChecked={props.post?.featured}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="featured" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
