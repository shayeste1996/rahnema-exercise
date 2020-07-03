import React, { Fragment } from 'react';
import CreatePostHeader from '../../components/CreatePostHeader';
import CreatePostBody from '../../components/CreatePostBody';
import CreatePostFooter from '../../components/CreatePostFooter';

/* icon must be imported from @ant-degin/icons */
const Icon = () => {};

export default function CreatePost() {
  return (
    <Fragment>
      <CreatePostHeader title="ایجاد پست" />
      <CreatePostBody
        icon={<Icon />}
        onTextChange={() => null}
        placeholder="در ذهنت چه می گذرد ؟"
      />
      <CreatePostFooter onImageSelect={() => null} onTagsChange={() => null} />
    </Fragment>
  );
}