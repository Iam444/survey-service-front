export type TPollFormat = 'voting' | 'elections';
export type TPollStatus = 'created' | 'opened' | 'closed';
export type TPollAccessType = 'public' | 'registered_only' | 'specified_users';
export type TPollStatisticsAccessType = 'public' | 'specified_users' | 'private';
export type TPollStatisticsDisplayFormat = 'none' | 'partial' | 'full';
export type TSortOrder = 'asc' | 'desc';

export interface ILogInRequestDTO {
    readonly email: string;
    readonly password: string;
}

export interface ILogInResponseDTO {
    readonly accessToken: string;
}

export interface ISignUpRequestDTO {
    readonly email: string;
    readonly password: string;
    readonly name: string;
    readonly surname: string | null;
}

export interface ISignUpResponseDTO {
    readonly accessToken: string;
}

export interface IRefreshSessionResponseDTO {
    readonly accessToken: string;
}

export interface IUserExistenceRequestDTO {
    readonly email: string;
}

export interface IUserExistenceResponseDTO {
    readonly isExists: boolean;
}

export type TViewerResponseDTO = IUserPreviewNestedDTO;

export interface IUserPreviewListRequestDTO {
    readonly limit?: number;
    readonly offset?: number;
    readonly filters?: IUserPreviewListFiltersNestedDTO | undefined;
}

export interface IUserPreviewListFiltersNestedDTO {
    readonly id?: IStringFilterNestedDTO;
    readonly email?: IStringFilterNestedDTO;
    readonly name?: IStringFilterNestedDTO;
    readonly surname?: IStringFilterNestedDTO;
    readonly fullName?: IStringFilterNestedDTO;
    readonly _or?: IUserPreviewListFiltersNestedDTO[];
}

export interface IUserPreviewListResponseDTO {
    readonly users: IUserPreviewNestedDTO[];
    readonly totalCount: number;
}

export interface IKnownUserListRequestDTO {
    readonly limit?: number;
    readonly offset?: number;
    readonly filters?: IUserPreviewListFiltersNestedDTO | undefined;
}

export interface IKnownUserListResponseDTO {
    readonly users: IUserPreviewNestedDTO[];
    readonly totalCount: number;
}

export interface IPollPreviewListRequestDTO {
    readonly limit?: number;
    readonly offset?: number;
    readonly filters?: IPollPreviewListFiltersNestedDTO | undefined;
    readonly sortBy?: IPollListSortOptionsDTO | undefined;
}

export interface IPollPreviewListFiltersNestedDTO {
    readonly name?: IStringFilterNestedDTO;
    readonly authorId?: IStringFilterNestedDTO;
    readonly format?: IEnumFilterNestedDTO<TPollFormat>;
    readonly status?: IEnumFilterNestedDTO<TPollStatus>;
    readonly _or?: IPollPreviewListFiltersNestedDTO[];
}

export interface IPollListSortOptionsDTO {
    readonly name?: TSortOrder;
}

export interface IPollPreviewListResponseDTO {
    readonly polls: IPollPreviewNestedDTO[];
    readonly totalCount: number;
}

interface IPollOverviewResponseDTO {
    readonly status: TPollStatus;
    readonly author: IUserPreviewNestedDTO;
    readonly name: string;
    readonly description: string | null;
    readonly settings: IPollSettingsNestedDTO;
    readonly viewerSelection: number[];
}

export interface IVotingPollOverviewResponseDTO extends IPollOverviewResponseDTO {
    readonly format: Extract<TPollFormat, 'voting'>;
    readonly options: IPollPlainOptionNestedDTO[];
}

export interface IElectionsPollOverviewResponseDTO extends IPollOverviewResponseDTO {
    readonly format: Extract<TPollFormat, 'elections'>;
    readonly options: IPollElectionsOptionNestedDTO[];
}

export interface IPollResultsResponseDTO {
    readonly isInMultiChoiceMode: boolean;
    readonly isInFullStatisticsMode: boolean;
    readonly summary: IPollResultsSummaryNestedDTO | null;
    readonly statistics: IPollResultsStatisticsDTO | null;
}

interface IPollResultsSummaryNestedDTO {
    readonly leadingOptions: IPollPlainOptionNestedDTO[];
    readonly viewerSelection: IPollPlainOptionNestedDTO[];
}

interface IPollResultsStatisticsDTO {
    readonly totalVotesQuantity: number;
    readonly optionStatisticsList: IPollOptionStatisticsNestedDTO[];
}

export interface IPollOptionStatisticsNestedDTO {
    readonly isSelectedByUser: boolean;
    readonly isLeading: boolean;
    readonly votesQuantity: number;
    readonly votesPercentage: number;
    readonly option: IPollPlainOptionNestedDTO;
    readonly votes?: IPollVoteNestedDTO[] | undefined;
}

interface IPollVoteNestedDTO {
    readonly votedBy: IUserPreviewNestedDTO;
    readonly votedAt: number;
}

interface ICreatePollRequestDTO {
    readonly name: string;
    readonly description: string | null;
    readonly settings: IPollSettingsDataNestedDTO;
}

export interface ICreateVotingPollRequestDTO extends ICreatePollRequestDTO {
    readonly format: Extract<TPollFormat, 'voting'>;
    readonly optionDataList: IPollPlainOptionDataNestedDTO[];
}

export interface ICreateElectionsPollRequestDTO extends ICreatePollRequestDTO {
    readonly format: Extract<TPollFormat, 'elections'>;
    readonly optionDataList: IPollElectionsOptionDataNestedDTO[];
}

export interface ICreatePollResponseDTO {
    readonly id: string;
}

export interface IEditPollRequestDTO {
    readonly name?: string;
    readonly description?: string | null;
}

export interface IChangePollStatusRequestDTO {
    readonly status: TPollStatus;
}

export interface ISubmitVotingPollVoteRequestDTO {
    readonly format: Extract<TPollFormat, 'voting'>;
    readonly optionDataList: IPollPlainOptionDataNestedDTO[];
}

export interface ISubmitElectionsPollVoteRequestDTO {
    readonly format: Extract<TPollFormat, 'elections'>;
    readonly optionDataList: IPollElectionsOptionDataNestedDTO[];
}

export interface IPollPreviewNestedDTO {
    readonly id: string;
    readonly format: TPollFormat;
    readonly status: TPollStatus;
    readonly name: string;
    readonly description: string | null;
    readonly author: IUserPreviewNestedDTO;
}

export interface IUserPreviewNestedDTO {
    readonly id: string;
    readonly email: string;
    readonly name: string;
    readonly surname: string | null;
    readonly fullName: string;
    readonly phone: string | null;
    readonly avatarUrl: string | null;
}

export interface IPollPlainOptionNestedDTO {
    readonly id: number;
    readonly name: string;
    readonly description: string | null;
}

export interface IPollElectionsOptionNestedDTO {
    readonly id: number;
    readonly name: string;
    readonly description: string | null;
    readonly candidate: IUserPreviewNestedDTO;
}

interface IPollPlainOptionDataNestedDTO {
    readonly name: string;
    readonly description: string | null;
}

interface IPollElectionsOptionDataNestedDTO {
    readonly name: string;
    readonly description: string | null;
    readonly candidateId: string;
}

export interface IPollSettingsNestedDTO {
    readonly isMultiChoiceEnabled: boolean;
    readonly accessSettings: IPollSpecifiedAccessSettingsNestedDTO | IPollNonSpecifiedUsersAccessSettingsNestedDTO;
    readonly statisticsSettings: IPollEnabledStatisticsSettingsNestedDTO | IPollDisabledStatisticsSettingsNestedDTO;
}

export interface IPollSpecifiedAccessSettingsNestedDTO {
    readonly type: Extract<TPollAccessType, 'specified_users'>;
    readonly holders: IUserPreviewNestedDTO[];
}

export interface IPollNonSpecifiedUsersAccessSettingsNestedDTO {
    readonly type: Exclude<TPollAccessType, 'specified_users'>;
}

export interface IPollStatisticsSpecifiedAccessSettingsNestedDTO {
    readonly type: Extract<TPollStatisticsAccessType, 'specified_users'>;
    readonly holders: IUserPreviewNestedDTO[];
}

export interface IPollStatisticsNonSpecifiedAccessSettingsNestedDTO {
    readonly type: Exclude<TPollStatisticsAccessType, 'specified_users'>;
}

export interface IPollDisabledStatisticsSettingsNestedDTO {
    readonly displayFormat: Extract<TPollStatisticsDisplayFormat, 'none'>;
}

export interface IPollEnabledStatisticsSettingsNestedDTO {
    readonly displayFormat: Exclude<TPollStatisticsDisplayFormat, 'none'>;
    readonly accessSettings: IPollStatisticsSpecifiedAccessSettingsNestedDTO | IPollStatisticsNonSpecifiedAccessSettingsNestedDTO;
    readonly shouldShowAfterVoting: boolean;
}

interface IPollSpecifiedUsersAccessSettingsDataNestedDTO {
    readonly type: Extract<TPollAccessType, 'specified_users'>;
    readonly holderIds: string[];
}

interface IPollNonSpecifiedAccessSettingsDataNestedDTO {
    readonly type: Exclude<TPollAccessType, 'specified_users'>;
}

interface IPollStatisticsSpecifiedAccessSettingsDataNestedDTO {
    readonly type: Extract<TPollStatisticsAccessType, 'specified_users'>;
    readonly holderIds: string[];
}

interface IPollStatisticsNonSpecifiedAccessSettingsDataNestedDTO {
    readonly type: Exclude<TPollStatisticsAccessType, 'specified_users'>;
}

interface IPollEnabledStatisticsSettingsDataNestedDTO {
    readonly displayFormat: Exclude<TPollStatisticsDisplayFormat, 'none'>;
    readonly accessSettings: IPollStatisticsSpecifiedAccessSettingsDataNestedDTO | IPollStatisticsNonSpecifiedAccessSettingsDataNestedDTO;
    readonly shouldShowAfterVoting: boolean;
}

interface IPollDisabledStatisticsSettingsDataNestedDTO {
    readonly displayFormat: Extract<TPollStatisticsDisplayFormat, 'none'>;
}

interface IPollSettingsDataNestedDTO {
    readonly isMultiChoiceEnabled: boolean;
    readonly accessSettings: IPollSpecifiedUsersAccessSettingsDataNestedDTO | IPollNonSpecifiedAccessSettingsDataNestedDTO;
    readonly statisticsSettings: IPollEnabledStatisticsSettingsDataNestedDTO | IPollDisabledStatisticsSettingsDataNestedDTO;
}

interface IStringFilterNestedDTO {
    readonly is?: string | undefined;
    readonly not?: string | undefined;
    readonly in?: string[] | undefined;
    readonly notIn?: string[] | undefined;
    readonly from?: string | undefined;
    readonly to?: string | undefined;
    readonly contains?: string | undefined;
}

interface IEnumFilterNestedDTO<T> {
    readonly is?: T | undefined;
    readonly not?: T | undefined;
    readonly in?: T[] | undefined;
    readonly notIn?: T[] | undefined;
    readonly contains?: string | undefined;
}
