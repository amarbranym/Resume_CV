
interface FormData {
    name: string;
    type: 'text' | 'date' | 'richtext' | 'select' | 'file';
    label: string;
    rules: {
        min_length?: number;
        max_length?: number;
    };
    help: string;
    cols: number;
    row: number;
    options?: { key: string; value: string }[];
    as?: string;
    rows?: string;
}

export const personalData: FormData[] = [
    {
        name: 'name',
        type: 'text',
        label: 'Full Name',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 1,
    },
    {
        name: 'photo',
        type: 'file',
        label: '',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 2,

    },

    {
        name: 'email',
        type: 'text',
        label: 'Email',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 1,

    },



    {
        name: 'job',
        type: 'text',
        label: 'Job title',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 1,

    },

    {
        name: 'phone',
        type: 'text',
        label: 'Phone Number',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 1,

    },
    {
        name: 'address',
        type: 'text',
        label: 'Address',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,

    },
];



export const EducationData: FormData[] = [
    {
        name: 'school',
        type: 'text',
        label: 'School',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,
    },
    {
        name: 'degree',
        type: 'text',
        label: 'Degree',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,
    },
    {
        name: 'city',
        type: 'text',
        label: 'City',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 1,
    },
    {
        name: 'country',
        type: 'text',
        label: 'Country',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 1,
    },
    // {
    //     name: 'start-date',
    //     type: 'date',
    //     label: 'Start Date',
    //     rules: {
    //         min_length: 5,
    //         max_length: 80,
    //     },
    //     help: '',
    //     cols: 12,
    //     row: 1,
    //     options: [
    //         { key: 'dont-show', value: 'Dont Show' },
    //         { key: 'only-year', value: 'Only Year' },
    //     ]
    // },
    // {
    //     name: 'end-date',
    //     type: 'date',
    //     label: 'End Date',
    //     rules: {
    //         min_length: 5,
    //         max_length: 80,
    //     },
    //     help: '',
    //     cols: 12,
    //     row: 1,
    //     options: [
    //         { key: 'dont-show', value: 'Dont Show' },
    //         { key: 'only-year', value: 'Only Year' },
    //         { key: 'present', value: 'Present (Current)' }
    //     ]
    // },
    {
        name: 'description',
        type: 'richtext',
        label: 'Description',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,
        as: "textarea",
        rows: "4",
    },
]


export const skillData: FormData[] = [
    {
        name: 'skill',
        type: 'text',
        label: 'Skill',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,
    },
]
export const HobbieData: FormData[] = [
    {
        name: 'hobbie',
        type: 'text',
        label: 'Hobbies',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,
    },
]
export const DocumentData: FormData[] = [
    {
        name: 'adhar-front',
        type: 'file',
        label: 'Adhar Front ',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 3,

    },
    {
        name: 'adhar-back',
        type: 'file',
        label: 'Adhar Back ',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 3,

    },
]


export const ExpreienceData: FormData[] = [
    {
        name: 'job_title',
        type: 'text',
        label: 'Job Title',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,
    },
    {
        name: 'employer',
        type: 'text',
        label: 'Employer',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,
    },
    {
        name: 'city',
        type: 'text',
        label: 'City',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 1,
    },
    {
        name: 'country',
        type: 'text',
        label: 'Country',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 6,
        row: 1,
    },
    // {
    //     name: 'start-date',
    //     type: 'date',
    //     label: 'Start Date',
    //     rules: {
    //         min_length: 5,
    //         max_length: 80,
    //     },
    //     help: '',
    //     cols: 12,
    //     row: 1,
    //     options: [
    //         { key: 'dont-show', value: 'Dont Show' },
    //         { key: 'only-year', value: 'Only Year' },
    //     ]
    // },
    // {
    //     name: 'end-date',
    //     type: 'date',
    //     label: 'End Date',
    //     rules: {
    //         min_length: 5,
    //         max_length: 80,
    //     },
    //     help: '',
    //     cols: 12,
    //     row: 1,
    //     options: [
    //         { key: 'dont-show', value: 'Dont Show' },
    //         { key: 'only-year', value: 'Only Year' },
    //         { key: 'present', value: 'Present (Current)' }
    //     ]
    // },
    {
        name: 'description',
        type: 'richtext',
        label: 'Description',
        rules: {
            min_length: 5,
            max_length: 80,
        },
        help: '',
        cols: 12,
        row: 1,
        as: "textarea",
        rows: "4",
    },
]