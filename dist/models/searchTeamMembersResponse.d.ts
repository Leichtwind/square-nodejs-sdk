import { Schema } from '../schema';
import { Error } from './error';
import { TeamMember } from './teamMember';
/** Represents a response from a search request, containing a filtered list of `TeamMember` objects. */
export interface SearchTeamMembersResponse {
    /** The filtered list of `TeamMember` objects. */
    teamMembers?: TeamMember[];
    /**
     * The opaque cursor for fetching the next page. Read about
     * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination) with Square APIs for more information.
     */
    cursor?: string;
    /** The errors that occurred during the request. */
    errors?: Error[];
}
export declare const searchTeamMembersResponseSchema: Schema<SearchTeamMembersResponse>;
