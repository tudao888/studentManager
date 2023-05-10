import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IBlog, NewBlog } from '../blog.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IBlog for edit and NewBlogFormGroupInput for create.
 */
type BlogFormGroupInput = IBlog | PartialWithRequiredKeyOf<NewBlog>;

type BlogFormDefaults = Pick<NewBlog, 'id'>;

type BlogFormGroupContent = {
  id: FormControl<IBlog['id'] | NewBlog['id']>;
  title: FormControl<IBlog['title']>;
  description: FormControl<IBlog['description']>;
  category: FormControl<IBlog['category']>;
};

export type BlogFormGroup = FormGroup<BlogFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class BlogFormService {
  createBlogFormGroup(blog: BlogFormGroupInput = { id: null }): BlogFormGroup {
    const blogRawValue = {
      ...this.getFormDefaults(),
      ...blog,
    };
    return new FormGroup<BlogFormGroupContent>({
      id: new FormControl(
        { value: blogRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      title: new FormControl(blogRawValue.title),
      description: new FormControl(blogRawValue.description),
      category: new FormControl(blogRawValue.category),
    });
  }

  getBlog(form: BlogFormGroup): IBlog | NewBlog {
    return form.getRawValue() as IBlog | NewBlog;
  }

  resetForm(form: BlogFormGroup, blog: BlogFormGroupInput): void {
    const blogRawValue = { ...this.getFormDefaults(), ...blog };
    form.reset(
      {
        ...blogRawValue,
        id: { value: blogRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): BlogFormDefaults {
    return {
      id: null,
    };
  }
}
