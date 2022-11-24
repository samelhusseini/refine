const {
    getImports,
    getNameChangeInImport,
    appendAfterImports,
} = require("@pankod/refine-cli");

/** @type {import('@pankod/refine-cli').RefineConfig} */
module.exports = {
    swizzle: {
        items: [
            {
                group: "Buttons",
                label: "ShowButton",
                files: [
                    {
                        src: "./src/components/buttons/show/index.tsx",
                        dest: "./src/components/buttons/show.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "CreateButton",
                files: [
                    {
                        src: "./src/components/buttons/create/index.tsx",
                        dest: "./src/components/buttons/create.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "CloneButton",
                files: [
                    {
                        src: "./src/components/buttons/clone/index.tsx",
                        dest: "./src/components/buttons/clone.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "DeleteButton",
                files: [
                    {
                        src: "./src/components/buttons/delete/index.tsx",
                        dest: "./src/components/buttons/delete.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "EditButton",
                files: [
                    {
                        src: "./src/components/buttons/edit/index.tsx",
                        dest: "./src/components/buttons/edit.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "ExportButton",
                files: [
                    {
                        src: "./src/components/buttons/export/index.tsx",
                        dest: "./src/components/buttons/export.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "ImportButton",
                files: [
                    {
                        src: "./src/components/buttons/import/index.tsx",
                        dest: "./src/components/buttons/import.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "ListButton",
                files: [
                    {
                        src: "./src/components/buttons/list/index.tsx",
                        dest: "./src/components/buttons/list.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "RefreshButton",
                files: [
                    {
                        src: "./src/components/buttons/refresh/index.tsx",
                        dest: "./src/components/buttons/refresh.tsx",
                    },
                ],
            },
            {
                group: "Buttons",
                label: "SaveButton",
                files: [
                    {
                        src: "./src/components/buttons/save/index.tsx",
                        dest: "./src/components/buttons/save.tsx",
                    },
                ],
            },
            {
                group: "Basic Views",
                label: "Create",
                files: [
                    {
                        src: "./src/components/crud/create/index.tsx",
                        dest: "./src/components/crud/create.tsx",
                    },
                ],
            },
        ],
        transform: (content) => {
            let newContent = content;
            const imports = getImports(content);

            imports.map((importItem) => {
                // for antd imports
                if (importItem.importPath === "antd") {
                    const newStatement = `import ${importItem.namedImports} from "@pankod/refine-antd";`;

                    newContent = newContent.replace(
                        importItem.statement,
                        newStatement,
                    );
                }

                // for icons
                if (importItem.importPath === "@ant-design/icons") {
                    const newStatement = `import { Icons } from "@pankod/refine-antd";`;

                    const iconsLine = `
                    const ${importItem.namedImports} = Icons;
                    `;

                    newContent = newContent.replace(
                        importItem.statement,
                        newStatement,
                    );

                    newContent = appendAfterImports(newContent, iconsLine);
                }

                // for ui-types
                if (importItem.importPath === "@pankod/refine-ui-types") {
                    newContent = newContent.replace(importItem.statement, "");

                    // prop is data-testid
                    // remove data-testid={*} from props
                    const testIdPropRegex = /data-testid={.*?}/g;

                    newContent = newContent.replace(testIdPropRegex, "");
                }

                // for prop types
                if (importItem.importPath === "../types") {
                    const newStatement = `import type ${importItem.namedImports} from "@pankod/refine-antd";`;

                    newContent = newContent.replace(
                        importItem.statement,
                        newStatement,
                    );
                }
            });

            return newContent;
        },
    },
};
