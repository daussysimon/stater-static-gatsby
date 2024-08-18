const config = {
  backend: {
    name: "git-gateway",
    branch: "main", // Branch to update (optional; defaults to main)
  },
  media_folder: "/public/files",
  public_folder: "/files",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "-",
  },
  editor: {
    preview: true,
    frame: false,
  },
  media_library: {
    max_file_size: 10240000,
    folder_support: false,
  },
  collections: [
    {
      name: "church",
      label: "Church Details",
      icon: "church",
      delete: false,
      editor: {
        preview: true,
        frame: false,
      },
      files: [
        {
          name: "church_details",
          label: "General Church Details",
          file: "content/church_details.json",
          description: "General church details",
          fields: [
            {
              name: "name",
              label: "Name",
              widget: "string",
            },
            {
              name: "address",
              label: "Address",
              widget: "string",
            },
            {
              name: "city",
              label: "City",
              widget: "string",
            },
            {
              name: "state",
              label: "State",
              widget: "string",
            },
            {
              name: "zipcode",
              label: "Zip Code",
              widget: "string",
            },
            {
              name: "phone",
              label: "Phone Number",
              widget: "string",
            },
            {
              name: "additional_phones",
              label: "Additional Phone Numbers",
              widget: "list",
              required: false,
              fields: [
                {
                  name: "name",
                  label: "Name",
                  widget: "string",
                },
                {
                  name: "phone",
                  label: "Phone Number",
                  widget: "string",
                },
              ],
            },
            {
              name: "email",
              label: "Email",
              widget: "string",
            },
            {
              name: "additional_emails",
              label: "Additional Emails",
              widget: "list",
              required: false,
              fields: [
                {
                  name: "name",
                  label: "Name",
                  widget: "string",
                },
                {
                  name: "email",
                  label: "Email",
                  widget: "string",
                },
              ],
            },
            {
              name: "contacts",
              label: "Contacts",
              widget: "list",
              required: false,
              fields: [
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                },
                {
                  name: "name",
                  label: "Name",
                  widget: "string",
                },
              ],
            },
            {
              name: "facebook_page",
              label: "Facebook Page",
              widget: "string",
            },
            {
              name: "google_map_location",
              label: "Google Map Embed URL",
              widget: "string",
            },
            {
              name: "online_giving_url",
              label: "Online Giving URL",
              widget: "string",
            },
            {
              name: "mission_statement",
              label: "Mission Statement",
              widget: "text",
            },
            {
              name: "vision_statement",
              label: "Vision Statement",
              widget: "text",
            },
          ],
        },
        {
          name: "times",
          label: "Mass & Confession Times",
          file: "content/times.json",
          description: "Mass & Confession Times",
          editor: {
            size: "half",
            preview: true,
            frame: false,
          },
          fields: [
            {
              name: "times",
              label: "Times",
              widget: "times",
            },
          ],
        },
        {
          name: "staff",
          label: "Staff",
          file: "content/staff.json",
          description: "Parish staff",
          media_folder: "/public/staff",
          public_folder: "/staff",
          fields: [
            {
              name: "staff",
              label: "Staff",
              widget: "list",
              summary: "{{fields.name}} - {{field.image}}",
              fields: [
                {
                  name: "name",
                  label: "Name",
                  widget: "string",
                },
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                },
                {
                  name: "picture",
                  label: "Picture",
                  widget: "image",
                  media_folder: "/public/staff",
                  public_folder: "/staff",
                  media_library: {
                    max_file_size: 10240000,
                    folder_support: false,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default config;
