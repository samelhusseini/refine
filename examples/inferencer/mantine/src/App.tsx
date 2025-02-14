import { Refine } from "@pankod/refine-core";
import {
    MantineProvider,
    NotificationsProvider,
    Layout,
    ErrorComponent,
    ReadyPage,
    notificationProvider,
    LightTheme,
    Global,
} from "@pankod/refine-mantine";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";

import {
    MantineListInferencer,
    MantineEditInferencer,
    MantineShowInferencer,
    MantineCreateInferencer,
} from "@pankod/refine-inferencer/mantine";

const App: React.FC = () => {
    return (
        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>
            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
            <NotificationsProvider position="top-right">
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(
                        "https://api.fake-rest.refine.dev",
                    )}
                    notificationProvider={notificationProvider}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    Layout={Layout}
                    resources={[
                        {
                            name: "samples",
                            list: MantineListInferencer,
                            edit: MantineEditInferencer,
                            show: MantineShowInferencer,
                            create: MantineCreateInferencer,
                            canDelete: true,
                        },
                        {
                            name: "categories",
                            list: MantineListInferencer,
                            edit: MantineEditInferencer,
                            show: MantineShowInferencer,
                            create: MantineCreateInferencer,
                            canDelete: true,
                        },
                        {
                            name: "users",
                            list: MantineListInferencer,
                            edit: MantineEditInferencer,
                            show: MantineShowInferencer,
                            create: MantineCreateInferencer,
                            canDelete: true,
                        },
                        {
                            name: "tags",
                        },
                    ]}
                />
            </NotificationsProvider>
        </MantineProvider>
    );
};

export default App;
